import Investment from '../models/Investment.js';
import Company from '../models/Company.js';
import { filterFieldsByLanguage } from '../middleware/languageMiddleware.js';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// 📍 Default Cairo
const DEFAULT_LOCATION = {
  type: "Point",
  coordinates: [31.2357, 30.0444]
};

// Helper: default status
const getDefaultStatus = (lang) => {
  if (lang === 'ar') return 'متاحة';
  if (lang === 'fr') return 'Disponible';
  return 'Available';
};



// ============================================
// GET ALL INVESTMENTS
// ============================================
export const getInvestments = async (req, res) => {
  try {
    const { min_amount, max_amount, governorate, featured, limit = 20, page = 1 } = req.query;
    const lang = req.language || 'ar';

    let query = {};

    if (min_amount || max_amount) {
      query.estimated_investment = {};
      if (min_amount) query.estimated_investment.$gte = Number(min_amount);
      if (max_amount) query.estimated_investment.$lte = Number(max_amount);
    }

    if (governorate) {
      query[`governorate_${lang}`] = new RegExp(governorate, 'i');
    }

    if (featured === 'true') {
      query.is_featured = true;
    }

    query[`status_${lang}`] = getDefaultStatus(lang);

    const skip = (page - 1) * limit;

    const investments = await Investment.find(query)
      .populate('company_id', `name_${lang} logo sector_${lang}`)
      .sort({ is_featured: -1, createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))
      .lean();

    const total = await Investment.countDocuments(query);

    const filteredInvestments = investments.map(inv => {
      const obj = filterFieldsByLanguage(inv, lang);

      // 🖼️ Image
      if (obj.image) obj.image = `${BASE_URL}${obj.image}`;

      // 🗺️ Lat / Lng
      if (inv.location_coordinates?.coordinates) {
        obj.lat = inv.location_coordinates.coordinates[1];
        obj.lng = inv.location_coordinates.coordinates[0];
      } else {
        obj.lat = 30.0444;
        obj.lng = 31.2357;
      }

      // 🔺 Polygon
      if (inv.polygon) {
        obj.polygon = inv.polygon.coordinates;
      }

      return obj;
    });

    res.json({
      investments: filteredInvestments,
      pagination: {
        page: Number(page),
        pages: Math.ceil(total / limit),
        total
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ============================================
// GET FEATURED
// ============================================
export const getFeaturedInvestments = async (req, res) => {
  try {
    const lang = req.language || 'ar';

    const investments = await Investment.find({
      is_featured: true,
      [`status_${lang}`]: getDefaultStatus(lang)
    })
      .populate('company_id', `name_${lang} logo`)
      .limit(10)
      .lean();

    const filtered = investments.map(inv => {
      const obj = filterFieldsByLanguage(inv, lang);

      if (inv.location_coordinates?.coordinates) {
        obj.lat = inv.location_coordinates.coordinates[1];
        obj.lng = inv.location_coordinates.coordinates[0];
      }

      if (inv.polygon) {
        obj.polygon = inv.polygon.coordinates;
      }

      return obj;
    });

    res.json(filtered);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ============================================
// GET BY ID
// ============================================
export const getInvestmentById = async (req, res) => {
  try {
    const lang = req.language || 'ar';

    const investment = await Investment.findById(req.params.id)
      .populate('company_id')
      .lean();

    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }

    await Investment.findByIdAndUpdate(req.params.id, {
      $inc: { views_count: 1 }
    });

    let filtered = filterFieldsByLanguage(investment, lang);

    // 🗺️ Lat/Lng
    if (investment.location_coordinates?.coordinates) {
      filtered.lat = investment.location_coordinates.coordinates[1];
      filtered.lng = investment.location_coordinates.coordinates[0];
    }

    // 🔺 Polygon
    if (investment.polygon) {
      filtered.polygon = investment.polygon.coordinates;
    }

    // 🏢 Company
    if (filtered.company_id) {
      filtered.company = filterFieldsByLanguage(filtered.company_id, lang);
      delete filtered.company_id;
    }

    res.json(filtered);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ============================================
// CREATE
// ============================================
export const createInvestment = async (req, res) => {
  try {
    const company = await Company.findById(req.body.company_id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    let imagePath = null;
    if (req.file) {
      imagePath = `/uploads/investment/${req.file.filename}`;
    }

    const { lat, lng, polygon } = req.body;

    let location_coordinates = DEFAULT_LOCATION;

    if (lat && lng) {
      location_coordinates = {
        type: "Point",
        coordinates: [parseFloat(lng), parseFloat(lat)]
      };
    }

    let polygonData = undefined;
    if (polygon) {
      polygonData = {
        type: "Polygon",
        coordinates: polygon
      };
    }

    const investment = new Investment({
      ...req.body,
      image: imagePath,
      location_coordinates,
      polygon: polygonData
    });

    const created = await investment.save();

    const result = created.toObject();

    if (result.image) {
      result.image = `${BASE_URL}${result.image}`;
    }

    // 🗺️ return lat/lng
    if (result.location_coordinates?.coordinates) {
      result.lat = result.location_coordinates.coordinates[1];
      result.lng = result.location_coordinates.coordinates[0];
    }

    res.status(201).json(result);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// ============================================
// UPDATE
// ============================================
export const updateInvestment = async (req, res) => {
  try {
    const investment = await Investment.findById(req.params.id);

    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }

    if (req.file) {
      const fs = await import('fs');
      const path = await import('path');

      if (investment.image) {
        const oldPath = path.join(process.cwd(), investment.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      investment.image = `/uploads/investment/${req.file.filename}`;
    }

    const { lat, lng, polygon } = req.body;

    if (lat && lng) {
      investment.location_coordinates = {
        type: "Point",
        coordinates: [parseFloat(lng), parseFloat(lat)]
      };
    }

    if (polygon) {
      investment.polygon = {
        type: "Polygon",
        coordinates: polygon
      };
    }

    Object.assign(investment, req.body);

    const updated = await investment.save();

    res.json(updated);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// ============================================
// DELETE
// ============================================
export const deleteInvestment = async (req, res) => {
  try {
    const investment = await Investment.findById(req.params.id);

    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }

    await investment.deleteOne();

    res.json({ message: 'Investment removed' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
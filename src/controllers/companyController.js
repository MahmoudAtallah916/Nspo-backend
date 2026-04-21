// controllers/companyController.js
import Company from '../models/Company.js';
import { filterFieldsByLanguage } from '../middleware/languageMiddleware.js';

// @desc    Get all companies
// @route   GET /api/companies?lang=en
// @access  Public
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({});

    const filteredCompanies = companies.map(company => {
      const obj = filterFieldsByLanguage(company.toObject(), req.language);

      // هنا نحول ObjectId لسلسلة
      obj.id = company._id.toString();

      // لو عايز تشيل _id من الاستجابة
      delete obj._id;

      return obj;
    });

    res.json(filteredCompanies);
  } catch (error) {
    console.error('Error in getCompanies:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get single company by ID
// @route   GET /api/companies/:id?lang=en
// @access  Public
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    // Filter based on language
    const filteredCompany = filterFieldsByLanguage(company.toObject(), req.language);
    
    // إضافة معلومات ملفات PDF
    const response = {
      ...filteredCompany,
      // معلومات PDF المنتجات 
      products_pdf: company.products_pdf ? {
        url: company.products_pdf.url,
        filename: company.products_pdf.filename,
        fileSize: company.products_pdf.fileSize,
        uploadedAt: company.products_pdf.uploadedAt,
        // يمكنك إضافة رابط التحميل المباشر
      } : null,
      
      // معلومات PDF فرص الاستثمار
      opportunities_pdf: company.opportunities_pdf ? {
        url: company.opportunities_pdf.url,
        filename: company.opportunities_pdf.filename,
        fileSize: company.opportunities_pdf.fileSize,
        uploadedAt: company.opportunities_pdf.uploadedAt,
      } : null,
      
      // مؤشرات بسيطة لوجود الملفات
      hasProductsPdf: !!company.products_pdf,
      hasOpportunitiesPdf: !!company.opportunities_pdf
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error in getCompanyById:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Download products PDF for a company
// @route   GET /api/companies/:id/download/products-pdf
// @access  Public
export const downloadProductsPDF = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    if (!company.products_pdf || !company.products_pdf.url) {
      return res.status(404).json({ message: 'Products PDF not found for this company' });
    }
    
    // توجيه المستخدم إلى رابط الملف
    res.redirect(company.products_pdf.url);
    
  } catch (error) {
    console.error('Error downloading products PDF:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Download opportunities PDF for a company
// @route   GET /api/companies/:id/download/opportunities-pdf
// @access  Public
export const downloadOpportunitiesPDF = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    if (!company.opportunities_pdf || !company.opportunities_pdf.url) {
      return res.status(404).json({ message: 'Opportunities PDF not found for this company' });
    }
    
    // توجيه المستخدم إلى رابط الملف
    res.redirect(company.opportunities_pdf.url);
    
  } catch (error) {
    console.error('Error downloading opportunities PDF:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
// @desc    Get companies by sector
// @route   GET /api/companies/sector/:sectorName?lang=en
// @access  Public
export const getCompaniesBySector = async (req, res) => {
  try {
    const { sectorName } = req.params;
    const lang = req.language;
    
    // Build query based on language
    const sectorField = `sector_${lang}`;
    
    const companies = await Company.find({
      [sectorField]: { $regex: sectorName, $options: 'i' }
    });
    
    // Filter each company
    const filteredCompanies = companies.map(company => 
      filterFieldsByLanguage(company.toObject(), lang)
    );
    
    res.json(filteredCompanies);
  } catch (error) {
    console.error('Error in getCompaniesBySector:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Search companies by name
// @route   GET /api/companies/search/:query?lang=en
// @access  Public
export const searchCompanies = async (req, res) => {
  try {
    const { query } = req.params;
    const lang = req.language;
    
    // Search in the appropriate language field
    const nameField = `name_${lang}`;
    
    const companies = await Company.find({
      [nameField]: { $regex: query, $options: 'i' }
    });
    
    // Filter each company
    const filteredCompanies = companies.map(company => 
      filterFieldsByLanguage(company.toObject(), lang)
    );
    
    res.json(filteredCompanies);
  } catch (error) {
    console.error('Error in searchCompanies:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get company investment opportunities
// @route   GET /api/companies/:id/investments?lang=en
// @access  Public
export const getCompanyInvestments = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    const lang = req.language;
    
    // Format investment opportunities based on language
    const opportunities = company.investment_opportunities?.map(opp => ({
      id: opp.id,
      title: opp[`title_${lang}`] || opp.title_en,
      summary: opp[`summary_${lang}`] || opp.summary_en,
      description: opp[`description_${lang}`] || opp.description_en,
      estimated_investment: opp.estimated_investment,
      currency: opp.currency,
      expected_roi: opp.expected_roi,
      status: opp[`status_${lang}`] || opp.status_en,
      is_featured: opp.is_featured,
      location: opp[`location_${lang}`] || opp.location_en,
      governorate: opp[`governorate_${lang}`] || opp.governorate_en,
      benefits: opp[`benefits_${lang}`] || opp.benefits_en || [],
      requirements: opp[`requirements_${lang}`] || opp.requirements_en || [],
      contact_person: opp[`contact_person_${lang}`] || opp.contact_person_en,
      contact_email: opp.contact_email,
      contact_phone: opp.contact_phone,
      images: opp.images?.map(img => ({
        url: img.url,
        title: img[`title_${lang}`] || img.title_en,
        is_main: img.is_main
      })) || []
    })) || [];
    
    res.json(opportunities);
  } catch (error) {
    console.error('Error in getCompanyInvestments:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get company locations with factories and products
// @route   GET /api/companies/:id/locations?lang=en
// @access  Public
export const getCompanyLocations = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    const lang = req.language;
    
    // Format locations based on language
    const locations = company.details.locations?.map(loc => ({
      location: loc[`location_${lang}`] || loc.location_en,
      governorate: loc[`governorate_${lang}`] || loc.governorate_en,
      formation: loc[`formation_${lang}`] || loc.formation_en,
      factories: loc.factories?.map(factory => ({
        factory: factory[`factory_${lang}`] || factory.factory_en,
        products: factory.products?.map(product => ({
          product: product[`product_${lang}`] || product.product_en,
          unit: product[`unit_${lang}`] || product.unit_en,
          capacity: product.capacity,
          product_image: product.product_image
        })) || []
      })) || []
    })) || [];
    
    res.json(locations);
  } catch (error) {
    console.error('Error in getCompanyLocations:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get company gallery
// @route   GET /api/companies/:id/gallery?lang=en
// @access  Public
export const getCompanyGallery = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    const lang = req.language;
    
    // Format gallery based on language
    const gallery = company.details.Gallary?.map(item => ({
      id: item.id,
      url: item.url,
      title: item[`title_${lang}`] || item.title_en,
      description: item[`description_${lang}`] || item.description_en
    })) || [];
    
    res.json(gallery);
  } catch (error) {
    console.error('Error in getCompanyGallery:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get company units
// @route   GET /api/companies/:id/units?lang=en
// @access  Public
export const getCompanyUnits = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    const lang = req.language;
    
    // Format units based on language
    const units = company.details.units?.map(unit => ({
      unit_name: unit[`unit_name_${lang}`] || unit.unit_name_en,
      location: unit[`location_${lang}`] || unit.location_en,
      governorate: unit[`governorate_${lang}`] || unit.governorate_en
    })) || [];
    
    res.json(units);
  } catch (error) {
    console.error('Error in getCompanyUnits:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================== SECTOR FUNCTIONS ====================

// @desc    Get all sectors with their companies in all languages
// @route   GET /api/sectors/all
// @access  Public
export const getAllSectors = async (req, res) => {
  try {
    const companies = await Company.find({});
    
    // Group sectors
    const sectorsMap = new Map();
    
    companies.forEach(company => {
      // Use sector_en as unique key
      const sectorKey = company.sector_en;
      
      if (!sectorsMap.has(sectorKey)) {
        sectorsMap.set(sectorKey, {
          sector_ar: company.sector_ar,
          sector_en: company.sector_en,
          sector_fr: company.sector_fr,
          gradient: company.gradient,
          companies_ar: [],
          companies_en: [],
          companies_fr: [],
          total_companies: 0
        });
      }
      
      const sector = sectorsMap.get(sectorKey);
      
      // Add company in all languages
      sector.companies_ar.push({
        id: company.id,
        name: company.name_ar,
        logo: company.logo,
        number_of_factories: company.number_of_factories
      });
      
      sector.companies_en.push({
        id: company.id,
        name: company.name_en,
        logo: company.logo,
        number_of_factories: company.number_of_factories
      });
      
      sector.companies_fr.push({
        id: company.id,
        name: company.name_fr,
        logo: company.logo,
        number_of_factories: company.number_of_factories
      });
      
      sector.total_companies += 1;
    });
    
    const sectors = Array.from(sectorsMap.values());
    res.json(sectors);
  } catch (error) {
    console.error('Error in getAllSectors:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get sectors by language
// @route   GET /api/sectors?lang=en
// @access  Public
export const getSectorsByLanguage = async (req, res) => {
  try {
    const lang = req.language; // ar, en, fr
    const companies = await Company.find({});
    
    // Group sectors by language
    const sectorsMap = new Map();
    
    companies.forEach(company => {
      const sectorField = `sector_${lang}`;
      const nameField = `name_${lang}`;
      
      const sectorName = company[sectorField];
      
      if (!sectorsMap.has(sectorName)) {
        sectorsMap.set(sectorName, {
          id: sectorsMap.size + 1,
          sector: sectorName,
          gradient: company.gradient,
          companies: [],
          total_companies: 0
        });
      }
      
      const sector = sectorsMap.get(sectorName);
      sector.companies.push({
        id: company.id,
        name: company[nameField],
        logo: company.logo,
        number_of_factories: company.number_of_factories
      });
      sector.total_companies += 1;
    });
    
    const sectors = Array.from(sectorsMap.values());
    res.json(sectors);
  } catch (error) {
    console.error('Error in getSectorsByLanguage:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get sectors summary (just sector names in all languages)
// @route   GET /api/sectors/summary
// @access  Public
export const getSectorsSummary = async (req, res) => {
  try {
    const companies = await Company.find({});
    
    // Extract unique sectors
    const sectorsMap = new Map();
    
    companies.forEach(company => {
      const sectorKey = company.sector_en;
      
      if (!sectorsMap.has(sectorKey)) {
        sectorsMap.set(sectorKey, {
          sector_ar: company.sector_ar,
          sector_en: company.sector_en,
          sector_fr: company.sector_fr,
          gradient: company.gradient,
          company_count: 0,
          id: sectorsMap.size + 1
        });
      }
      
      sectorsMap.get(sectorKey).company_count += 1;
    });
    
    const sectors = Array.from(sectorsMap.values());
    res.json(sectors);
  } catch (error) {
    console.error('Error in getSectorsSummary:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get sectors with company counts in specific language
// @route   GET /api/sectors/with-counts?lang=en
// @access  Public
export const getSectorsWithCounts = async (req, res) => {
  try {
    const lang = req.language;
    const companies = await Company.find({});
    
    // Aggregate sectors with counts
    const sectorsMap = new Map();
    
    companies.forEach(company => {
      const sectorName = company[`sector_${lang}`] || company.sector_en;
      const sectorKey = company.sector_en; // unified key
      
      if (!sectorsMap.has(sectorKey)) {
        sectorsMap.set(sectorKey, {
          id: sectorKey,
          name: sectorName,
          name_ar: company.sector_ar,
          name_en: company.sector_en,
          name_fr: company.sector_fr,
          gradient: company.gradient,
          company_count: 0,
          companies: []
        });
      }
      
      const sector = sectorsMap.get(sectorKey);
      sector.company_count += 1;
      sector.companies.push({
        id: company.id,
        name: company[`name_${lang}`] || company.name_en,
        logo: company.logo
      });
    });
    
    const sectors = Array.from(sectorsMap.values());
    res.json(sectors);
  } catch (error) {
    console.error('Error in getSectorsWithCounts:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get sector by ID with companies in all languages
// @route   GET /api/sectors/:sectorId
// @access  Public
export const getSectorById = async (req, res) => {
  try {
    const { sectorId } = req.params;
    const companies = await Company.find({ sector_en: sectorId });
    
    if (companies.length === 0) {
      return res.status(404).json({ message: 'Sector not found' });
    }
    
    const firstCompany = companies[0];
    const sector = {
      sector_ar: firstCompany.sector_ar,
      sector_en: firstCompany.sector_en,
      sector_fr: firstCompany.sector_fr,
      gradient: firstCompany.gradient,
      companies_ar: [],
      companies_en: [],
      companies_fr: [],
      total_companies: companies.length
    };
    
    companies.forEach(company => {
      sector.companies_ar.push({
        id: company.id,
        name: company.name_ar,
        logo: company.logo,
        number_of_factories: company.number_of_factories
      });
      
      sector.companies_en.push({
        id: company.id,
        name: company.name_en,
        logo: company.logo,
        number_of_factories: company.number_of_factories
      });
      
      sector.companies_fr.push({
        id: company.id,
        name: company.name_fr,
        logo: company.logo,
        number_of_factories: company.number_of_factories
      });
    });
    
    res.json(sector);
  } catch (error) {
    console.error('Error in getSectorById:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get sector statistics
// @route   GET /api/sectors/stats
// @access  Public
export const getSectorStats = async (req, res) => {
  try {
    const companies = await Company.find({});
    
    const sectorStats = new Map();
    
    companies.forEach(company => {
      const sectorKey = company.sector_en;
      
      if (!sectorStats.has(sectorKey)) {
        sectorStats.set(sectorKey, {
          sector_ar: company.sector_ar,
          sector_en: company.sector_en,
          sector_fr: company.sector_fr,
          gradient: company.gradient,
          total_companies: 0,
          total_factories: 0,
          total_investments: 0
        });
      }
      
      const stats = sectorStats.get(sectorKey);
      stats.total_companies += 1;
      stats.total_factories += company.number_of_factories || 0;
      stats.total_investments += company.investment_opportunities?.length || 0;
    });
    
    const result = Array.from(sectorStats.values());
    res.json(result);
  } catch (error) {
    console.error('Error in getSectorStats:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Search sectors by name in any language
// @route   GET /api/sectors/search/:query
// @access  Public
export const searchSectors = async (req, res) => {
  try {
    const { query } = req.params;
    const lang = req.language;
    
    const companies = await Company.find({
      $or: [
        { sector_ar: { $regex: query, $options: 'i' } },
        { sector_en: { $regex: query, $options: 'i' } },
        { sector_fr: { $regex: query, $options: 'i' } }
      ]
    });
    
    // Group by sector
    const sectorsMap = new Map();
    
    companies.forEach(company => {
      const sectorKey = company.sector_en;
      
      if (!sectorsMap.has(sectorKey)) {
        sectorsMap.set(sectorKey, {
          sector_ar: company.sector_ar,
          sector_en: company.sector_en,
          sector_fr: company.sector_fr,
          gradient: company.gradient,
          companies: [],
          relevance: 1
        });
      }
      
      const sector = sectorsMap.get(sectorKey);
      sector.companies.push({
        id: company.id,
        name: company[`name_${lang}`] || company.name_en,
        logo: company.logo
      });
    });
    
    const sectors = Array.from(sectorsMap.values());
    res.json(sectors);
  } catch (error) {
    console.error('Error in searchSectors:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Create a new company
// @route   POST /api/companies
// @access  Private/Admin
export const createCompany = async (req, res) => {
  try {
    // Check if company with this id already exists
    const existingCompany = await Company.findOne({ id: req.body.id });
    
    if (existingCompany) {
      return res.status(400).json({ message: 'Company with this ID already exists' });
    }
    
    const company = new Company(req.body);
    const savedCompany = await company.save();
    
    res.status(201).json(savedCompany);
  } catch (error) {
    console.error('Error in createCompany:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: 'Validation error', errors: messages });
    }
    
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update a company
// @route   PUT /api/companies/:id
// @access  Private/Admin
export const updateCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    // Update fields
    Object.assign(company, req.body);
    
    const updatedCompany = await company.save();
    
    res.json(updatedCompany);
  } catch (error) {
    console.error('Error in updateCompany:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: 'Validation error', errors: messages });
    }
    
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete a company
// @route   DELETE /api/companies/:id
// @access  Private/Admin
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    await company.deleteOne();
    
    res.json({ message: 'Company removed successfully' });
  } catch (error) {
    console.error('Error in deleteCompany:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get featured investment opportunities across all companies
// @route   GET /api/companies/investments/featured?lang=en
// @access  Public
export const getFeaturedInvestments = async (req, res) => {
  try {
    const companies = await Company.find({
      'investment_opportunities.is_featured': true
    });
    
    const lang = req.language;
    const featuredInvestments = [];
    
    companies.forEach(company => {
      company.investment_opportunities?.forEach(opp => {
        if (opp.is_featured) {
          featuredInvestments.push({
            company_id: company.id,
            company_name: company[`name_${lang}`] || company.name_en,
            company_logo: company.logo,
            investment: {
              id: opp.id,
              title: opp[`title_${lang}`] || opp.title_en,
              summary: opp[`summary_${lang}`] || opp.summary_en,
              estimated_investment: opp.estimated_investment,
              currency: opp.currency,
              expected_roi: opp.expected_roi,
              status: opp[`status_${lang}`] || opp.status_en
            }
          });
        }
      });
    });
    
    res.json(featuredInvestments);
  } catch (error) {
    console.error('Error in getFeaturedInvestments:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get companies statistics
// @route   GET /api/companies/stats
// @access  Public
export const getCompanyStats = async (req, res) => {
  try {
    const totalCompanies = await Company.countDocuments();
    
    const totalInvestmentOpportunities = await Company.aggregate([
      { $unwind: '$investment_opportunities' },
      { $count: 'total' }
    ]);
    
    const totalLocations = await Company.aggregate([
      { $unwind: '$details.locations' },
      { $count: 'total' }
    ]);
    
    const stats = {
      total_companies: totalCompanies,
      total_investment_opportunities: totalInvestmentOpportunities[0]?.total || 0,
      total_locations: totalLocations[0]?.total || 0,
      sectors: await Company.distinct('sector_en')
    };
    
    res.json(stats);
  } catch (error) {
    console.error('Error in getCompanyStats:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
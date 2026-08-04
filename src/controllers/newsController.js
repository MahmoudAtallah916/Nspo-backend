import News from '../models/News.js';
import { generateUniqueSlug } from '../utils/slugify.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Builds a public URL path for uploaded files.
 * Returns null when no file is provided.
 */
const buildImagePath = (req, file) =>
  file ? `${req.protocol}://${req.get('host')}/uploads/news/${file.filename}` : null;

const buildImagePaths = (req, files = []) =>
  files.map((f) => `${req.protocol}://${req.get('host')}/uploads/news/${f.filename}`);

/**
 * Returns first non-empty value among supplied titles (used for slug generation).
 */
const pickSlugTitle = (title_ar, title_en, title_fr) =>
  (title_ar || title_en || title_fr || '').trim();

// ─── Create News ──────────────────────────────────────────────────────────────

export const createNews = async (req, res, next) => {
  try {
    const {
      title_ar = '',
      title_en = '',
      title_fr = '',
      summary_ar = '',
      summary_en = '',
      summary_fr = '',
      content_ar = '',
      content_en = '',
      content_fr = '',
      category,
      isFeatured,
    } = req.body;

    // Require at least one title
    const slugTitle = pickSlugTitle(title_ar, title_en, title_fr);
    if (!slugTitle) {
      return res.status(400).json({ success: false, message: 'Title is required (in at least one language)' });
    }

    const slug = await generateUniqueSlug(slugTitle, News);

    const image = req.files?.image?.[0]
      ? buildImagePath(req, req.files.image[0])
      : req.body.image || null;

    const extraImages = req.files?.images
      ? buildImagePaths(req, req.files.images)
      : [];

    const news = await News.create({
      title_ar,
      title_en,
      title_fr,
      slug,
      summary_ar,
      summary_en,
      summary_fr,
      content_ar,
      content_en,
      content_fr,
      category: category || 'news',
      isFeatured: isFeatured === 'true' || isFeatured === true,
      image,
      images: extraImages,
    });

    res.status(201).json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

// ─── Get All News (list with pagination, filter, search) ─────────────────────

export const getAllNews = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      search,
      sort = '-createdAt',
    } = req.query;

    const filter = {};

    if (category) filter.category = category;

    if (search) {
      // Search across all language title fields
      filter.$or = [
        { title_ar: { $regex: search, $options: 'i' } },
        { title_en: { $regex: search, $options: 'i' } },
        { title_fr: { $regex: search, $options: 'i' } },
      ];
    }

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const [total, news] = await Promise.all([
      News.countDocuments(filter),
      News.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limitNum)
        .select('-content_ar -content_en -content_fr'), // exclude heavy content on list
    ]);

    res.json({
      success: true,
      data: news,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (err) {
    next(err);
  }
};

// ─── Get Featured News ────────────────────────────────────────────────────────

export const getFeaturedNews = async (req, res, next) => {
  try {
    const { limit = 5 } = req.query;
    const news = await News.find({ isFeatured: true })
      .sort('-createdAt')
      .limit(parseInt(limit))
      .select('-content_ar -content_en -content_fr');

    res.json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

// ─── Get Related News ─────────────────────────────────────────────────────────

export const getRelatedNews = async (req, res, next) => {
  try {
    const { category } = req.params;
    const { limit = 5, exclude } = req.query;

    const validCategories = ['news', 'projects', 'announcements', 'achievements', 'tenders'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ success: false, message: 'Invalid category' });
    }

    const filter = { category };
    if (exclude) filter._id = { $ne: exclude };

    const news = await News.find(filter)
      .sort('-createdAt')
      .limit(parseInt(limit))
      .select('-content_ar -content_en -content_fr');

    res.json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

// ─── Get Single News by id ──────────────────────────────────────────────────

export const getNewsById = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }

    res.json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

// ─── Update News ──────────────────────────────────────────────────────────────

export const updateNews = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }

    const {
      title_ar,
      title_en,
      title_fr,
      summary_ar,
      summary_en,
      summary_fr,
      content_ar,
      content_en,
      content_fr,
      category,
      isFeatured,
    } = req.body;

    // Update title fields
    if (title_ar !== undefined) news.title_ar = title_ar;
    if (title_en !== undefined) news.title_en = title_en;
    if (title_fr !== undefined) news.title_fr = title_fr;

    // Regenerate slug if any title changed
    const newSlugTitle = pickSlugTitle(
      title_ar ?? news.title_ar,
      title_en ?? news.title_en,
      title_fr ?? news.title_fr
    );
    const oldSlugTitle = pickSlugTitle(news.title_ar, news.title_en, news.title_fr);
    if (newSlugTitle && newSlugTitle !== oldSlugTitle) {
      news.slug = await generateUniqueSlug(newSlugTitle, News);
    }

    // Update summary fields
    if (summary_ar !== undefined) news.summary_ar = summary_ar;
    if (summary_en !== undefined) news.summary_en = summary_en;
    if (summary_fr !== undefined) news.summary_fr = summary_fr;

    // Update content fields
    if (content_ar !== undefined) news.content_ar = content_ar;
    if (content_en !== undefined) news.content_en = content_en;
    if (content_fr !== undefined) news.content_fr = content_fr;

    if (category !== undefined) news.category = category;
    if (isFeatured !== undefined) {
      news.isFeatured = isFeatured === 'true' || isFeatured === true;
    }

    // Handle image replacement
    if (req.files?.image?.[0]) {
      news.image = buildImagePath(req, req.files.image[0]);
    } else if (req.body.image !== undefined) {
      news.image = req.body.image;
    }

    // Append or replace extra images
    if (req.files?.images?.length) {
      news.images = buildImagePaths(req, req.files.images);
    }

    await news.save();
    res.json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

// ─── Delete News ──────────────────────────────────────────────────────────────

export const deleteNews = async (req, res, next) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }
    res.json({ success: true, message: 'News deleted successfully' });
  } catch (err) {
    next(err);
  }
};

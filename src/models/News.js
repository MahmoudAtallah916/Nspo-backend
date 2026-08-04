import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    // ── Multilingual Title ──────────────────────────────────────────────────
    title_ar: {
      type: String,
      trim: true,
      default: '',
    },
    title_en: {
      type: String,
      trim: true,
      default: '',
    },
    title_fr: {
      type: String,
      trim: true,
      default: '',
    },

    // ── Slug (generated from title_ar or title_en or title_fr) ─────────────
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // ── Multilingual Summary ────────────────────────────────────────────────
    summary_ar: {
      type: String,
      trim: true,
      default: '',
    },
    summary_en: {
      type: String,
      trim: true,
      default: '',
    },
    summary_fr: {
      type: String,
      trim: true,
      default: '',
    },

    // ── Multilingual Content ────────────────────────────────────────────────
    content_ar: {
      type: String,
      default: '',
    },
    content_en: {
      type: String,
      default: '',
    },
    content_fr: {
      type: String,
      default: '',
    },

    // ── Media ───────────────────────────────────────────────────────────────
    image: {
      type: String,
      default: null,
    },
    images: {
      type: [String],
      default: [],
    },

    // ── Meta ────────────────────────────────────────────────────────────────
    category: {
      type: String,
      enum: ['news', 'projects', 'announcements', 'achievements', 'tenders'],
      default: 'news',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Virtual: returns first available title (for backward compat / admin use)
newsSchema.virtual('title').get(function () {
  return this.title_ar || this.title_en || this.title_fr || '';
});

// Index for fast lookups
newsSchema.index({ slug: 1 });
newsSchema.index({ category: 1 });
newsSchema.index({ isFeatured: 1 });
// Text search on all language titles and summaries
newsSchema.index({
  title_ar: 'text',
  title_en: 'text',
  title_fr: 'text',
  summary_ar: 'text',
  summary_en: 'text',
  summary_fr: 'text',
});

const News = mongoose.model('News', newsSchema);

export default News;

// models/Investment.js
import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema(
  {
    // =============================
    // Relation
    // =============================
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      index: true
    },

    // =============================
    // Multilingual Fields
    // =============================
    title_ar: { type: String, required: true },
    title_en: { type: String, required: true },
    title_fr: { type: String, required: true },

    summary_ar: { type: String, required: true },
    summary_en: { type: String, required: true },
    summary_fr: { type: String, required: true },

    description_ar: { type: String, required: true },
    description_en: { type: String, required: true },
    description_fr: { type: String, required: true },

    investment_type_ar: String,
    investment_type_en: String,
    investment_type_fr: String,

    // =============================
    // Financial Info
    // =============================
    estimated_investment: Number,
    currency: { type: String, default: "EGP" },
    expected_roi: Number,
    project_duration_months: Number,

    // =============================
    // Status
    // =============================
    status_ar: {
      type: String,
      enum: ["متاحة", "قيد التفاوض", "محجوزة", "مكتملة"],
      default: "متاحة"
    },
    status_en: {
      type: String,
      enum: ["Available", "Under Negotiation", "Reserved", "Completed"],
      default: "Available"
    },
    status_fr: {
      type: String,
      enum: ["Disponible", "En Négociation", "Réservé", "Terminé"],
      default: "Disponible"
    },

    // =============================
    // Location Text
    // =============================
    location_ar: String,
    location_en: String,
    location_fr: String,

    governorate_ar: String,
    governorate_en: String,
    governorate_fr: String,

    // =============================
    // 🗺️ GEO LOCATION (IMPORTANT)
    // =============================
    location_coordinates: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: {
        type: [Number], // [lng, lat]
        default: [31.2357, 30.0444] // Cairo fallback
      }
    },

    // =============================
    // 🔺 Polygon (Optional)
    // =============================
    polygon: {
      type: {
        type: String,
        enum: ["Polygon"],
      },
      coordinates: {
        type: [[[Number]]], // [[ [lng, lat], ... ]]
      }
    },

    // =============================
    // Details
    // =============================
    benefits_ar: [String],
    benefits_en: [String],
    benefits_fr: [String],

    requirements_ar: [String],
    requirements_en: [String],
    requirements_fr: [String],

    // =============================
    // Image
    // =============================
    image: String,

    // =============================
    // Contact
    // =============================
    contact_person_ar: String,
    contact_person_en: String,
    contact_person_fr: String,
    contact_email: String,
    contact_phone: String,

    // =============================
    // Meta
    // =============================
    is_featured: { type: Boolean, default: false },
    expiry_date: Date,
    views_count: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);


// =============================
// INDEXES
// =============================
investmentSchema.index({ is_featured: -1, createdAt: -1 });
investmentSchema.index({ governorate_en: 1 });
investmentSchema.index({ governorate_ar: 1 });
investmentSchema.index({ governorate_fr: 1 });
investmentSchema.index({ status_en: 1 });

// 🗺️ Geo index
investmentSchema.index({ location_coordinates: "2dsphere" });

// auto remove expired
investmentSchema.index(
  { expiry_date: 1 },
  { expireAfterSeconds: 0 }
);


// =============================
// VIRTUAL RELATION → COMPANY
// =============================
investmentSchema.virtual("company", {
  ref: "Company",
  localField: "company_id",
  foreignField: "_id",
  justOne: true
});


// =============================
// LOCALIZATION HELPER
// =============================
investmentSchema.methods.toLocalizedObject = function (lang = "ar") {
  return {
    id: this._id,

    title: this[`title_${lang}`],
    summary: this[`summary_${lang}`],
    description: this[`description_${lang}`],

    investment_type: this[`investment_type_${lang}`],
    location: this[`location_${lang}`],
    governorate: this[`governorate_${lang}`],

    benefits: this[`benefits_${lang}`],
    requirements: this[`requirements_${lang}`],

    status: this[`status_${lang}`],

    estimated_investment: this.estimated_investment,
    expected_roi: this.expected_roi,

    image: this.image,

    contact_email: this.contact_email,
    contact_phone: this.contact_phone,

    company_id: this.company_id,
    is_featured: this.is_featured,
    createdAt: this.createdAt,

    // 🗺️ GEO DATA
    lat: this.location_coordinates?.coordinates?.[1],
    lng: this.location_coordinates?.coordinates?.[0],
    location_coordinates: this.location_coordinates,

    // 🔺 Polygon
    polygon: this.polygon
  };
};


// =============================
// ENABLE VIRTUALS
// =============================
investmentSchema.set("toJSON", { virtuals: true });
investmentSchema.set("toObject", { virtuals: true });

export default mongoose.model("Investment", investmentSchema);
import mongoose from 'mongoose';

// Product Schema
const productSchema = new mongoose.Schema({
  product_ar: { type: String, required: true },
  product_en: { type: String, required: true },
  product_fr: { type: String, required: true },
  
  unit_ar: { type: String, required: true },
  unit_en: { type: String, required: true },
  unit_fr: { type: String, required: true },
  
  product_image: { type: String, required: true },
  capacity: { type: Number, required: true }
});

// Factory Schema
const factorySchema = new mongoose.Schema({
  factory_ar: { type: String, required: true },
  factory_en: { type: String, required: true },
  factory_fr: { type: String, required: true },
  
  products: [productSchema]
});

// Location Schema
const locationSchema = new mongoose.Schema({
  location_ar: { type: String, required: true },
  location_en: { type: String, required: true },
  location_fr: { type: String, required: true },
  
  governorate_ar: { type: String, required: true },
  governorate_en: { type: String, required: true },
  governorate_fr: { type: String, required: true },
  
  formation_ar: String,
  formation_en: String,
  formation_fr: String,
  
  factories: [factorySchema]
});

// Gallery Schema
const gallerySchema = new mongoose.Schema({
  id: Number,
  url: String,
  title_ar: String,
  title_en: String,
  title_fr: String,
  description_ar: String,
  description_en: String,
  description_fr: String
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  address_ar: String,
  address_en: String,
  address_fr: String,
  phone: String,
  fax: String,
  email: String
}, { _id: false });

// Unit Schema
const unitSchema = new mongoose.Schema({
  unit_name_ar: String,
  unit_name_en: String,
  unit_name_fr: String,
  location_ar: String,
  location_en: String,
  location_fr: String, 
  governorate_ar: String,
  governorate_en: String,
  governorate_fr: String
}, { _id: false });

// Headquarter Schema
const headquarterSchema = new mongoose.Schema({
  address_ar: String,
  address_en: String,
  address_fr: String,
  governorate_ar: String,
  governorate_en: String,
  governorate_fr: String
}, { _id: false });

// Details Schema
const detailsSchema = new mongoose.Schema({
  Gallary: [gallerySchema],
  website: { type: String },

  establishment_year: String,
  description_ar: { type: String, required: true },
  description_en: { type: String, required: true },
  description_fr: { type: String, required: true },
  products_ar: [String],
  products_en: [String],
  products_fr: [String],
  contact: contactSchema,
  locations: [locationSchema],
  headquarter: headquarterSchema,
  units: [unitSchema]
});

// Investment Opportunity Schema

// PDF Schema (reusable)
const pdfSchema = new mongoose.Schema({
  url: { type: String }, // رابط الملف
  filename: { type: String }, // اسم الملف الأصلي
  fileSize: { type: Number }, // حجم الملف بالبايت
  uploadedAt: { type: Date, default: Date.now } // تاريخ الرفع
}, { _id: false });

// Main Company Schema
const companySchema = new mongoose.Schema({
  
  // Multilingual fields
  name_ar: { type: String, required: true },
  name_en: { type: String, required: true },
  name_fr: { type: String, required: true },
  
  sector_ar: { type: String, required: true },
  sector_en: { type: String, required: true },
  sector_fr: { type: String, required: true },
  
  // Non-multilingual fields
  logo: { type: String, required: true },
  gradient: { type: String, required: true },
  number_of_factories: { type: Number, required: true },
  
  // ✅ PDF for products catalog
  products_pdf: pdfSchema,
  
  // ✅ PDF for investment opportunities
  opportunities_pdf: pdfSchema,
  
  
  // Embedded details
  details: detailsSchema
}, {
  timestamps: true
});

// Create indexes
companySchema.index({ id: 1 });
companySchema.index({ name_ar: 1, name_en: 1, name_fr: 1 });
companySchema.index({ sector_ar: 1, sector_en: 1, sector_fr: 1 });

export default mongoose.model('Company', companySchema);   
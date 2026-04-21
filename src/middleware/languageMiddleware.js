// middleware/languageMiddleware.js
import mongoose from "mongoose";
// دالة لتحديد اللغة
export const detectLanguage = (req, res, next) => {
  const supportedLanguages = ['ar', 'en', 'fr'];
  
  // من query parameter
  let lang = req.query.lang;
  
  // من header
  if (!lang && req.headers['accept-language']) {
    lang = req.headers['accept-language'].split(',')[0].substring(0, 2);
  }
  
  // validation
  req.language = supportedLanguages.includes(lang) ? lang : 'ar';
  
  // Set response header
  res.setHeader('Content-Language', req.language);
  
  next();
};

// دالة لتصفية الكائنات (دي function عادية مش middleware)

export const filterFieldsByLanguage = (obj, lang) => {
  if (!obj || typeof obj !== "object") return obj;

  // ✅ لو ObjectId رجعه string
  if (obj instanceof mongoose.Types.ObjectId) {
    return obj.toString();
  }

  // ✅ لو Date
  if (obj instanceof Date) {
    return obj;
  }

  // ✅ Array
  if (Array.isArray(obj)) {
    return obj.map(item => filterFieldsByLanguage(item, lang));
  }

  const result = {};

  for (const [key, value] of Object.entries(obj)) {

    // multilingual fields
    if (key.match(/_(ar|en|fr)$/)) {
      const baseKey = key.slice(0, -3);
      const fieldLang = key.slice(-2);

      if (fieldLang === lang) {
        result[baseKey] = value;
      }
      continue;
    }

    // ✅ لو Object عادي فقط
    if (
      value &&
      typeof value === "object" &&
      !(value instanceof Date) &&
      !(value instanceof mongoose.Types.ObjectId)
    ) {
      result[key] = filterFieldsByLanguage(value, lang);
    } else {
      result[key] = value;
    }
  }

  return result;
};
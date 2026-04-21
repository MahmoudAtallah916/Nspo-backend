// middleware/responseFilter.js
import { filterFieldsByLanguage } from './languageMiddleware.js';

export const responseFilter = (req, res, next) => {
  // Save the original res.json function
  const originalJson = res.json;
  
  // Replace res.json with a new function
  res.json = function(body) {
    // Filter the body based on language
    const filteredBody = filterFieldsByLanguage(body, req.language);
    
    // Call the original json with the filtered body
    // IMPORTANT: use originalJson directly, not res.json
    return originalJson.call(this, filteredBody);
  };
  
  next();
};
/**
 * Converts a string to a URL-friendly kebab-case slug.
 * Supports Arabic and Latin characters.
 * @param {string} text
 * @returns {string}
 */
export const slugify = (text) => {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\u0600-\u06FF-]+/g, '') // Allow Arabic, word chars, hyphens
    .replace(/--+/g, '-')           // Replace multiple -- with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
};

/**
 * Generates a unique slug by appending a timestamp suffix if needed.
 * @param {string} title
 * @param {import('mongoose').Model} Model - the Mongoose model to check uniqueness against
 * @returns {Promise<string>}
 */
export const generateUniqueSlug = async (title, Model) => {
  let slug = slugify(title);
  let exists = await Model.findOne({ slug });
  if (!exists) return slug;

  // Append timestamp to ensure uniqueness
  const unique = `${slug}-${Date.now()}`;
  return unique;
};

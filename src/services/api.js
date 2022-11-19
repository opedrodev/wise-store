/**
 * Get categories from API
 * @memberof `services/api`
 * @returns an array of categories
 */
export const getCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
};

/**
 * Search products by query
 * @memberof `services/api`
 * @param {string} query - The query to search for
 * @returns the search results
 */
export const getProductsFromQuery = async (query) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();
  return data;
};

/**
 * Search products by category id
 * @memberof `services/api
 * @param {string} categoryID - The category ID to search for
 * @returns the search results
 */
export const getProductsFromCategoryId = async (categoryID) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}`);
  const data = await response.json();
  return data;
};

/**
 * Get product by id
 * @memberof `services/api`
 * @param {string} id - The product ID to search for
 * @returns the product
 */
export const getProductById = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
};

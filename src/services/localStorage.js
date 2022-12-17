/**
 * Get feedbacks from local storage
 * @returns {array} - The array of feedbacks
 */
export function getFeedbacksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('feedbacks')) || [];
}

/**
 * Add feedback to local storage
 * @param {object} feedback - The feedback to add to local storage
 */
export function addFeedbackToLocalStorage(feedback) {
  const feedbacks = getFeedbacksFromLocalStorage();
  feedbacks.push(feedback);
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
}

/**
 * Get products from local storage
 * @returns {array} - The array of products
 */
export function getCartFromLocalStorage() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

/**
 * Save cart to local storage
 * @param {array} cart - The cart to save to local storage
 */
export function saveCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

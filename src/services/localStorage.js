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

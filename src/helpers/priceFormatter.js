/**
   * Format the price to BRL currency.
   * @param {Number} value - Number to be formatted
   * @returns {String} Formatted price
   */
const formatPrice = (value) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(value);
};

export default formatPrice;

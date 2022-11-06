import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles/components/Product.module.scss';

function Product(props) {
  const { product: { price, title, thumbnail } } = props;

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

  return (
    <div className={styles.product}>
      <img src={thumbnail} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        {formatPrice(price)}
      </p>
      <button type="button" className={styles.button}>Add to Cart</button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Product;

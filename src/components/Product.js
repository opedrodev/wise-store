import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles/components/Product.module.scss';

function Product(props) {
  const { product: { price, title, thumbnail } } = props;

  return (
    <div className={styles.product}>
      <img src={thumbnail} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        R$
        &nbsp;
        {Number(price).toFixed(2)}
      </p>
      <button type="button" className={styles.button}>Add to Cart</button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Product;

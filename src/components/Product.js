import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../helpers/priceFormatter';

import styles from '../styles/components/Product.module.scss';
import Button from './Button';

function Product(props) {
  const {
    product: {
      price, title, thumbnail, id,
    },
  } = props;

  return (
    <div className={styles.product}>
      <img src={thumbnail} alt={title} className={styles.image} />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.price}>
        {formatPrice(price)}
      </p>

      <Link to={`/details/${id}`} className={styles.details}>Ver detalhes</Link>

      <Button
        placeholder="Adicionar ao Carrinho"
        className={styles.button}
      />
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Product;

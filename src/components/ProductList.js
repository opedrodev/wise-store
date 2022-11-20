import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';

import styles from '../styles/components/ProductList.module.scss';
import Welcome from './Welcome';

function ProductList(props) {
  const { products } = props;

  return (
    <section className={styles.productlist}>
      {products.length < 1
        ? <Welcome />
        : products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};

export default ProductList;

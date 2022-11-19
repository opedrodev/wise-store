import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetailsById } from '../app/reducers/products';
import Header from '../components/Header';

import styles from '../styles/pages/ProductDetails.module.scss';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: item } = useSelector((state) => state.products);
  const [selectedPicture, setSelectedPicture] = useState('');

  useEffect(() => {
    dispatch(fetchProductDetailsById(id));
  }, [id]);

  useEffect(() => {
    setSelectedPicture(item.pictures ? item.pictures[0] : '');
  }, [item]);

  return (
    <main className={styles.productdetails}>
      <Header />

      <section className={styles.details}>
        <div className={styles.pictures}>
          <div className={styles.container}>
            <img src={selectedPicture.url} alt={item.title} className={styles.selectedpicture} />
          </div>

          <div className={styles.showcase}>
            {item?.pictures?.map((pic) => (
              <img
                key={pic.id}
                src={pic.url}
                alt={pic.id}
                className={styles.figure}
                onMouseEnter={() => setSelectedPicture(pic)}
                onClick={() => setSelectedPicture(pic)}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;

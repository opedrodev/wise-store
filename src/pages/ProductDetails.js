import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addProductToCart } from '../app/reducers/cart';
import { fetchProductDetailsById } from '../app/reducers/products';
import Button from '../components/Button';
import Feedback from '../components/Feedback';
import Header from '../components/Header';
import formatPrice from '../helpers/priceFormatter';

import styles from '../styles/pages/ProductDetails.module.scss';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      <div className={styles.content}>
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

          <div className={styles.info}>
            <h2 className={styles.title}>{ item.title }</h2>
            <p className={styles.quantity}>
              Em estoque:
              &nbsp;
              { item.available_quantity }
            </p>
            <p className={styles.price}>{formatPrice(item.price)}</p>

            <Button
              placeholder="Adicionar ao Carrinho"
              className={styles.button}
              onClick={() => dispatch(addProductToCart(item))}
            />
            <Button
              placeholder="Ir para o Carrinho"
              className={styles.button}
              onClick={() => navigate('/cart')}
            />
          </div>
        </section>

        <Feedback />
      </div>
    </main>
  );
}

export default ProductDetails;

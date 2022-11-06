import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import { fetchByCategory, fetchByQuery } from '../redux/reducers/products';

import styles from '../styles/pages/Home.module.scss';

function Home() {
  const { id, term } = useParams();
  const dispatch = useDispatch();
  const { items: { results }, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchByCategory(id));
  }, [id]);

  useEffect(() => {
    dispatch(fetchByQuery(term));
  }, [term]);

  return (
    <main className={styles.home}>
      <Header />
      <Sidebar />

      {loading ? <Loading /> : <ProductList products={results || []} />}
    </main>
  );
}

export default Home;

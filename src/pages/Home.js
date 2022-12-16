import React, { useEffect, useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchByCategory, fetchByQuery } from '../app/reducers/products';
import Button from '../components/Button';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';

import styles from '../styles/pages/Home.module.scss';

function Home() {
  const dispatch = useDispatch();
  const { id, term } = useParams();
  const { items: { results }, loading } = useSelector((state) => state.products);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 650) setIsSidebarHidden(true);
  }, []);

  useEffect(() => {
    dispatch(fetchByCategory(id));
  }, [id]);

  useEffect(() => {
    dispatch(fetchByQuery(term));
  }, [term]);

  const onSidebarHide = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const onCategoryClick = () => {
    onSidebarHide();
  };

  return (
    <main className={styles.home}>
      <Header />

      {isSidebarHidden && (
      <Button
        placeholder={<IoArrowForward />}
        className={styles.back}
        onClick={() => setIsSidebarHidden(!isSidebarHidden)}
      />
      )}

      {!isSidebarHidden && (
      <Sidebar
        onSidebarHide={onSidebarHide}
        onCategoryClick={onCategoryClick}
      />
      )}

      {loading ? <Loading /> : <ProductList products={results || []} />}
    </main>
  );
}

export default Home;

import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import styles from '../styles/pages/Home.module.scss';

const { home } = styles;

function Home() {
  return (
    <main className={home}>
      <Header />
      <Sidebar />
    </main>
  );
}

export default Home;

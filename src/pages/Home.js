import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import styles from '../styles/pages/Home.module.scss';

function Home() {
  return (
    <main className={styles.home}>
      <Header />
      <Sidebar />
    </main>
  );
}

export default Home;

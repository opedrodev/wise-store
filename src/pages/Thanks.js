import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import styles from '../styles/pages/Thanks.module.scss';

function Thanks() {
  return (
    <section className={styles.thanks}>
      <Header />
      <div className={styles.wrapper}>
        <h1>Obrigado pela compra!</h1>
        <Link to="/">Voltar para a página inicial</Link>
      </div>
    </section>
  );
}

export default Thanks;

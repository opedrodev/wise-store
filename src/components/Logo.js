import React from 'react';
import styles from '../styles/components/Logo.module.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <h1 className={styles.title}>
        Wise
        <sub className={styles.sub}>store</sub>
      </h1>
    </div>
  );
}

export default Logo;

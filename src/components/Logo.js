import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/Logo.module.scss';

function Logo() {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.logo} aria-hidden onClick={logoClickHandler}>
      <h1 className={styles.title}>
        Wise
        <sub className={styles.sub}>store</sub>
      </h1>
    </div>
  );
}

export default Logo;

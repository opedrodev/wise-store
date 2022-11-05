import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/Logo.module.scss';

const { logo, title, sub } = styles;

function Logo() {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate('/');
  };

  return (
    <div className={logo} aria-hidden onClick={logoClickHandler}>
      <h1 className={title}>
        Wise
        <sub className={sub}>store</sub>
      </h1>
    </div>
  );
}

export default Logo;

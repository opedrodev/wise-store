import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../services/api';

import styles from '../styles/components/Sidebar.module.scss';
import Button from './Button';

function Sidebar(props) {
  const { onSidebarHide, onCategoryClick } = props;

  const [categories, setCategories] = useState([]);
  // const [isHidden, setIsHidden] = useState(false);

  /**
   * Fetch the categories from the API.
   */
  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className={`${styles.sidebar}`}>
      <Button
        className={styles.close}
        placeholder={<IoArrowBack />}
        onClick={() => onSidebarHide()}
      />

      {categories.map(({ id, name }) => (
        <NavLink
          key={id}
          to={`/category/${id}`}
          className={({ isActive }) => (isActive ? styles.active : styles.category)}
          onClick={() => onCategoryClick()}
        >
          {name}

        </NavLink>
      ))}
    </section>
  );
}

Sidebar.propTypes = {
  onSidebarHide: PropTypes.func.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default Sidebar;

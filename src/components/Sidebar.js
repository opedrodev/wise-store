import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../services/api';

import styles from '../styles/components/Sidebar.module.scss';

function Sidebar() {
  const [categories, setCategories] = useState([]);

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
    <section className={styles.sidebar}>
      {categories.map(({ id, name }) => (
        <NavLink
          key={id}
          to={`/category/${id}`}
          className={({ isActive }) => (isActive ? styles.active : styles.category)}
        >
          {name}

        </NavLink>
      ))}
    </section>
  );
}

export default Sidebar;

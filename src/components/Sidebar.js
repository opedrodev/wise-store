import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../services/api';

import styles from '../styles/components/Sidebar.module.scss';

const { sidebar, active, category } = styles;

function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => async () => setCategories(await getCategories()), [setCategories]);

  return (
    <section className={sidebar}>
      {categories.map(({ id, name }) => (
        <NavLink
          key={id}
          to={`/category/${id}`}
          className={({ isActive }) => (isActive ? active : category)}
        >
          {name}

        </NavLink>
      ))}
    </section>
  );
}

export default Sidebar;

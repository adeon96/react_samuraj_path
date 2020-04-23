import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebar__nav}>
        <NavLink className={styles.sidebar__item} to="/profile" activeClassName={styles.sidebar__item_active}>
          Profile
        </NavLink>

        <NavLink className={styles.sidebar__item} to="/dialogs" activeClassName={styles.sidebar__item_active}>
          Messages
        </NavLink>

        <NavLink className={styles.sidebar__item} to="/news" activeClassName={styles.sidebar__item_active}>
          News
        </NavLink>

        <NavLink className={styles.sidebar__item} to="/music" activeClassName={styles.sidebar__item_active}>
          Music
        </NavLink>

        <NavLink className={styles.sidebar__item} to="/settings" activeClassName={styles.sidebar__item_active}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
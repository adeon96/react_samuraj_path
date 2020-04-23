import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/dialogs">Messages</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
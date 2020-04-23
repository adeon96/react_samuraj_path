import React from 'react';
import styles from './Sidebar.module.css';

/**
 * let c1 = "item"
 * let c2 = "active"
 * 
 * let classes = c1 + " " + c2
 * let classesNew = `${c1} ${c2}`
 */

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li><a className={styles.item} href="google.com">Profile</a></li>
          <li><a href="google.com">Messages</a></li>
          <li><a href="google.com">News</a></li>
          <li><a href="google.com">Music</a></li>
          <li><a href="google.com">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
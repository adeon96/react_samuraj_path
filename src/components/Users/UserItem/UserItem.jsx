import React from 'react'
import styles from './UserItem.module.css'
import { NavLink } from 'react-router-dom';


const UserItem = (props) => {

  let onFollowClick = () => {
    let userId = props.id;
    props.toggleUserFollow(userId);
  }

  return (
    <div className={styles.userItem}>

      <div className={styles.userItem__left}>
        <div className={styles.userPhoto}>
          <NavLink to={'/profile/' + props.id}>
            <img src={props.photoURL} alt='ava' />
          </NavLink>
        </div>
        

        <button className={styles.userButton} onClick={onFollowClick}>
          {props.isFollowed ? 'Unfollow' : 'Follow'}
        </button>
      </div>

      <div className={styles.userItem__right}>

        <div className={styles.right_top}>
          <h3 className={styles.userName}>{props.name}</h3>
          <p className={styles.right__userLocation}>
            {"props.location.city"}, {"props.location.country"}</p>
        </div>

        <div className={styles.right_bottom}>
          <p>{props.status}</p>
        </div>

      </div>

    </div>
  );
}

export default UserItem;
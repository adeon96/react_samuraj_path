import React from 'react'
import styles from './UserItem.module.css'
import { NavLink } from 'react-router-dom';


const UserItem = (props) => {

  let onFollowClick = () => {
    props.followUser(props.id);
  }

  let onUnfollowClick = () => {
    props.unfollowUser(props.id);
  }

  return (
    <div className={styles.userItem}>

      <div className={styles.userItem__left}>
        <div className={styles.userPhoto}>
          <NavLink to={'/profile/' + props.id}>
            <img src={props.photoURL} alt='ava' />
          </NavLink>
        </div>

        {props.isFollowed ?
          <button disabled={props.isButtonDisabled} className={styles.userButton} onClick={onUnfollowClick}>Unfollow</button> : 
          <button disabled={props.isButtonDisabled} className={styles.userButton} onClick={onFollowClick}>Follow</button>} 
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
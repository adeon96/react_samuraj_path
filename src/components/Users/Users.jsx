import React from 'react';
import styles from './Users.module.css';

import UserItem from './UserItem/UserItem';
import defaultImg from '../../assets/img/placeholderImg.png';

import * as axios from 'axios';

const Users = (props) => {

  let getUsers = () => {
    if (props.usersArr.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  };

  let users = props.usersArr.map(user => <UserItem
    key={user.id}
    id={user.id}
    name={user.name}
    photoURL={user.photos.large === undefined || user.photos.large === null ?
      defaultImg : user.photos.large}
    location={user.location}
    status={user.status}
    isFollowed={user.followed}
    toggleUserFollow={props.toggleUserFollow} />);


  return (
    <div className={styles.usersPage}>

      <h2>Users</h2>
      <button onClick={getUsers}>Get Users</button>

      <div className={styles.users}>
        {users}
      </div>
    </div>
  );
}

export default Users;
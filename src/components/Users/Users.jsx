import React from 'react';
import styles from './Users.module.css';

import UserItem from './UserItem/UserItem';

const Users = (props) => {

  let usersArr = [
    {
      id: 1,
      name: 'Roma',
      photoURL: 'https://cdn.pixabay.com/photo/2019/05/24/10/59/business-man-4226005_960_720.jpg',
      location: {
        city: 'Kyiv',
        country: 'Ukraine'
      },
      status: 'I am a little samurai...',
      isFollowed: true
    },

    {
      id: 2,
      name: 'Vika',
      photoURL: 'https://i.pinimg.com/originals/97/ed/6b/97ed6b370803649addbf66144c18c194.png',
      location: {
        city: 'Warsaw',
        country: 'Poland'
      },
      status: 'Looking for something special...',
      isFollowed: true
    },

    {
      id: 3,
      name: 'Dima',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      },
      status: 'I am a Barca fan...',
      isFollowed: false
    }
  ];

  if (props.usersArr.length === 0)
    props.setUsers(usersArr);

  let users = props.usersArr.map(user => <UserItem
    key={user.id}
    id={user.id}
    name={user.name}
    photoURL={user.photoURL === undefined || user.photoURL === '' ?
      'https://mypower.in.ua/wp-content/uploads/placeholder-300x200.png' : user.photoURL}
    location={user.location}
    status={user.status}
    isFollowed={user.isFollowed}
    toggleUserFollow={props.toggleUserFollow} />);


  return (
    <div className={styles.usersPage}>

      <h2>Users</h2>

      <div className={styles.users}>
        {users}
      </div>
    </div>
  );
}

export default Users;
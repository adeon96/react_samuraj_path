import React from 'react';
import styles from './Users.module.css';

import UserItem from './UserItem/UserItem';
import defaultImg from '../../assets/img/placeholderImg.png';

import * as axios from 'axios';

class UsersClass extends React.Component {

  //mapped data with state to jsx
  _usersData = null;

  /*constructor(props) {

    super(props);

    alert("Users constructor");

  }*/

  //inserting data to state
  _getUsers = () => {
    //debugger;
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      });

      //console.log("_getUsers()");
  }

  componentDidMount() {
    this._getUsers();
  }

  render() {
    //debugger;
    console.log("users render");

    this._usersData = this.props.usersArr.map(user => <UserItem
      key={user.id}
      id={user.id}
      name={user.name}
      photoURL={user.photos.large === undefined || user.photos.large === null ?
        defaultImg : user.photos.large}
      location={user.location}
      status={user.status}
      isFollowed={user.followed}
      toggleUserFollow={this.props.toggleUserFollow} />);

      console.log(this._usersData);

    return (
      <div className={styles.usersPage}>

        <h2>Users</h2>

        <div className={styles.users}>
          {this._usersData}
        </div>
      </div>
    );
  }

};

export default UsersClass;
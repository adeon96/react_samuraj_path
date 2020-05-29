import React from 'react';
import styles from './Users.module.css';

import UserItem from './UserItem/UserItem';
import defaultImg from '../../assets/img/user_placeholder.jpg';

import * as axios from 'axios';

class UsersClass extends React.Component {

  //mapped data with state to jsx
  _usersData = null;

  //inserting data to state
  _getUsers = (pageNum, usersPerPage) => {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?` + 
      `page=${pageNum}&count=${usersPerPage}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  componentDidMount() {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?` + 
      `page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersNumber(response.data.totalCount);
      });
  }

  onPageChange = (e) => {
    this.props.setCurrentPage(e.target.value);
    this._getUsers(e.target.value, this.props.usersPerPage);
  }

  render() {

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


    let pagesNumber = 
      Math.ceil(this.props.totalUsersNumber / this.props.usersPerPage);

    let pages = [];
    for(let i = 1; i <= pagesNumber; i++) {
      pages.push(i);
    }


    //<option>1</option>
    //<option>2</option>
    //...
    let pagesHTML = pages.map(page => <option key={page}>{page}</option>);


    return (
      <div className={styles.usersPage}>

        <h2>Users</h2>

        <span>Select page: </span>
        <select value={this.props.currentPage} onChange={this.onPageChange}>
          {pagesHTML}
        </select>

        <div className={styles.users}>
          {this._usersData}
        </div>
      </div>
    );
  }

};

export default UsersClass;
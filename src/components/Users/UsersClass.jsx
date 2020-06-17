import React from 'react';
import styles from './Users.module.css';

import UserItem from './UserItem/UserItem';
import defaultImg from '../../assets/img/user_placeholder.jpg';
import Preloader from '../commom/Preloader';

import usersAPI from '../../api/usersAPI';

class UsersClass extends React.Component {

  //mapped data with state to jsx
  _usersData = null;

  //object containing methods for work with users
  api = new usersAPI();

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersPerPage);
  }

  onPageChange = (e) => {
    let currentPage = e.target.value;
    this.props.setCurrentPage(currentPage);

    this.props.getUsers(currentPage, this.props.usersPerPage);
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
      isButtonDisabled={user.disabled}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser} />);


    let pagesNumber =
      Math.ceil(this.props.totalUsersNumber / this.props.usersPerPage);

    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
      pages.push(i);
    }


    //<option>1</option>
    //<option>2</option>
    //...
    let pagesHTML = pages.map(page =>
      <option key={page.toString()} value={page}>{page}</option>);


    return (
      <div className={styles.usersPage}>

        <h2>Users</h2>

        <span>Select page: </span>
        <select value={this.props.currentPage} onChange={this.onPageChange}>
          {pagesHTML}
        </select>

        {this.props.isFetching ? <Preloader /> : ''}

        <div className={styles.users}>
          {this._usersData}
        </div>
      </div>
    );
  }

};

export default UsersClass;
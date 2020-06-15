import * as axios from 'axios';

class usersAPI {

  _instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
      'API-KEY': 'e1de558d-3eb2-467c-959e-2ffee0df160a'
    }
  });

  getUsers = (pageNum = 1, usersPerPage = 5) => {

    return (
      this._instance.get(`users?page=${pageNum}&count=${usersPerPage}`)
        .then(response => {
          return response.data;
        })
    )
  }

  getUserProfile = (userId = 10) => {

    return (
      this._instance.get('profile/' + userId)
        .then(response => {
          return response.data;
        })
    )

  }

  authorizeUser = () => {

    return (
      this._instance.get('auth/me')
        .then(response => {
          return response.data;
        })
    )
  }

  followUser = (userId) => {
    return (
      this._instance.post('follow/' + userId)
      .then(response => {
        return response.data;
      })
    )
  }

  unfollowUser = (userId) => {
    return (
      this._instance.delete('follow/' + userId)
      .then(response => {
        return response.data;
      })
    )
  }

  isUserFollowed = (userId) => {
    return (
      this._instance.get('follow/' + userId)
      .then(response => {
        if(response.data === true) {
          return true;
        }
        
        return false;
      })
    )
  }

}

export default usersAPI;
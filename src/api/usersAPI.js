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
    )

  }

  authorizeUser = () => {

    return (
      this._instance.get('auth/me')
    )
  }

  followUser = (userId) => {
    return (
      this._instance.post('follow/' + userId)
    )
  }

  unfollowUser = (userId) => {
    return (
      this._instance.delete('follow/' + userId)
    )
  }

  getUserStatus = (userId) => {
    return (
      this._instance.get('profile/status/' + userId)
    )
  }

  updateUserStatus = (newStatus) => {
    return (
      this._instance.put('profile/status/', {
        status: newStatus
      })
    )
  }

}

export default usersAPI;
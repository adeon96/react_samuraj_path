import * as axios from 'axios';

class authAPI {

  _instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
      'API-KEY': 'e1de558d-3eb2-467c-959e-2ffee0df160a'
    }
  });

  authMe = () => {

    return (
      this._instance.get('auth/me')
    )
  }

  authUser = (userEmail, userPassword, rememberFlag = false) => {

    return (
      this._instance.post('/auth/login', {
        email: userEmail,
        password: userPassword,
        rememberMe: rememberFlag
      })
    )

  }

  logout = () => {
    return (
      this._instance.delete('/auth/login')
    )
  }

}

export default authAPI;
import usersAPI from "../api/usersAPI";

const SET_PROFILE_DATA = 'SET-PROFILE-DATA';
const SET_PROFILE_DATA_FETCHING = 'SET-PROFILE-DATA-FETCHING';
const SET_USER_STATUS = 'SET-USER-STATUS';

const api = new usersAPI();

const initialState = {
  aboutData: {
    userId: -1,
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: null,

    contacts: {
      github: null,
      vk: null,
      facebook: null,
      instagram: null,
      twitter: null,
      website: null,
      youtube: null,
      mainLink: null
    },

    photos: {
      small: null,
      large: null
    },
  },

  status: '',
  isFetching: false
};

const aboutReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        aboutData: { ...action.profileData }
      }

    case SET_PROFILE_DATA_FETCHING:
      return {
        ...state,
        isFetching: action.fetchingFlag
      }

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state;
  }
}



export default aboutReducer;

export const setProfileDataAC = (profData) => ({
  type: SET_PROFILE_DATA,
  profileData: profData
});

export const setProfileDataFetchingAC = (fetchFlag) => ({
  type: SET_PROFILE_DATA_FETCHING,
  fetchingFlag: fetchFlag
});

export const setStatusAC = (status) => ({
  type: SET_USER_STATUS,
  status: status
});

//Thunk
export const getUserProfile = (userId) => (dispatch) => {
  dispatch(setProfileDataFetchingAC(true));

  api.getUserProfile(userId)
    .then(response => {
      dispatch(setProfileDataAC(response.data));
      dispatch(setProfileDataFetchingAC(false));
    })
}

export const getUserStatus = (userId) => (dispatch) => {
  dispatch(setProfileDataFetchingAC(true));

  api.getUserStatus(userId)
    .then(response => {
      dispatch(setStatusAC(response.data));
      dispatch(setProfileDataFetchingAC(false));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
  dispatch(setProfileDataFetchingAC(true));

  api.updateUserStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
      dispatch(setProfileDataFetchingAC(false));
    })
}
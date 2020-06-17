import usersAPI from "../api/usersAPI";

const SET_PROFILE_DATA = 'SET-PROFILE-DATA';
const SET_PROFILE_DATA_FETCHING = 'SET-PROFILE-DATA-FETCHING';

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

//Thunk
export const getUserProfile = (userId) => (dispatch) => {
  dispatch(setProfileDataFetchingAC(true));

  api.getUserProfile(userId)
    .then(response => {
      dispatch(setProfileDataAC(response.data));
      dispatch(setProfileDataFetchingAC(false));
    })
}
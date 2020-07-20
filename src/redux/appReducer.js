import { getUserAuthData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {

  switch(action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }

}

export default appReducer;

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch) => {
  let meDataPromise = dispatch(getUserAuthData());

  Promise.all([meDataPromise])
    .then(() => {
      dispatch(initializedSuccess());
    })
} 
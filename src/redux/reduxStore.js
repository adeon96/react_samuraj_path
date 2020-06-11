import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import aboutReducer from "./aboutReducer";
import authReducer from "./authReducer";

let reducersCollection = combineReducers({
  postsPage: profileReducer,
  infoPage: aboutReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducersCollection);

window.store = store;

export default store;
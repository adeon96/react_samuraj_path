import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import aboutReducer from "./aboutReducer";

let reducersCollection = combineReducers({
  postsPage: profileReducer,
  infoPage: aboutReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

let store = createStore(reducersCollection);

window.store = store;

export default store;
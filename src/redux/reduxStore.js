import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import aboutReducer from "./aboutReducer";
import authReducer from "./authReducer";
import thunkMw from "redux-thunk";

let reducersCollection = combineReducers({
  postsPage: profileReducer,
  infoPage: aboutReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducersCollection, applyMiddleware(thunkMw));

window.store = store;

export default store;
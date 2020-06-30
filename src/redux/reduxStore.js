import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import aboutReducer from "./aboutReducer";
import authReducer from "./authReducer";
import thunkMw from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducersCollection = combineReducers({
  postsPage: profileReducer,
  infoPage: aboutReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducersCollection, applyMiddleware(thunkMw));

window.store = store;

export default store;
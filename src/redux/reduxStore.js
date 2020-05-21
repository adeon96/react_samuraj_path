import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducersCollection = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

let store = createStore(reducersCollection);

window.store = store;

export default store;
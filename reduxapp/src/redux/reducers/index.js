import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import userReducer from "./userReducer";

// root reducers
export default combineReducers({
    contacts: contactReducer,
    users: userReducer
})
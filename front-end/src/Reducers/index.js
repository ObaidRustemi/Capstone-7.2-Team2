import { combineReducers } from "redux";
import currentUserReducer from "./currentuser"

export default combineReducers({
    currentUser: currentUserReducer
})
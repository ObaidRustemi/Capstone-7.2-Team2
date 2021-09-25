import { combineReducers } from "redux";
import users from "./usersReducer";
import venues from "./venuesReducer"

const appState = {
    users, venues
};

const rootReducer = combineReducers(appState);



export default rootReducer;
// import our reducers to pass to combineReducers... for now just posts


// create rootReducer using by passing an object with our posts to combineReducers 

// export rootReducer

import { combineReducers } from "redux";
import users from "./usersReducer";
import venues from "./venuesReducer"
import artwork from "./artworkReducer"
import currentUser from "./currentuser"

const appState = {
    users, venues, currentUser, artwork

};

const rootReducer = combineReducers(appState);



export default rootReducer;
// import our reducers to pass to combineReducers... for now just posts


// create rootReducer using by passing an object with our posts to combineReducers 

// export rootReducer

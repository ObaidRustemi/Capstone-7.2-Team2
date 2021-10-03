import { combineReducers } from "redux";
import users from "./usersReducer";
import user from "./usersReducer";
import venues from "./venuesReducer";
import venue from "./venuesReducer";
import artwork from "./artworkReducer";
import singleArtwork from "./artworkReducer";
import currentUser from "./currentuser";
import venueImages from "./venueImagesReducer";
import venueImage from "./venueImagesReducer";

const appState = {
  users,
  user,
  venues,
  venue,
  currentUser,
  artwork,
  singleArtwork,
  venueImage, 
  venueImages,
  
};

const rootReducer = combineReducers(appState);

export default rootReducer;
// import our reducers to pass to combineReducers... for now just posts

// create rootReducer using by passing an object with our posts to combineReducers

// export rootReducer

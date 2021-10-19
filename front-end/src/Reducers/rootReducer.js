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
import uploadUrl from "./venueImagesReducer"
import newUser from "./newUserReducer";
import newnewUsers from "./users"

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
  uploadUrl,
  newUser,
  newnewUsers 
};

const rootReducer = combineReducers(appState);

export default rootReducer;
// import our reducers to pass to combineReducers... for now just posts

// create rootReducer using by passing an object with our posts to combineReducers

// export rootReducer

// 1. Incorporate the new reducer.  I would do it under a weird key, like ‘NEWNEW_users’
// 2. Once you have the new reducer setup, test. Make sure with a `useSelector` function you can see state.NEWNEW_users
// That slice, “NEWNEW_users”, should now work exactly like your `state.users` slice. Once you’re tested that it does, you can remove users slice. And then rename the NEWNEW to `users`
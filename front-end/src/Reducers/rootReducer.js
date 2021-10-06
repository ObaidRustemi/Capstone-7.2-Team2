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
import newUser from "./newUserReducer";

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
  newUser,
};

const rootReducer = combineReducers(appState);

export default rootReducer;
// import our reducers to pass to combineReducers... for now just posts

// create rootReducer using by passing an object with our posts to combineReducers



// usersReducer 
// dispatch({ type: 'ADD_USER', payload: {} });
// case(ADD_USER) {
//    return { ...state, action.payload };
// }

// {
//   users: {
//     'skdjfiu23iwuebf': {
//       id: 'skdjfiu23iwuebf',
//       name: 'mashu',
//     }
//   }, 
//   currentUser: {
//     id: 'sdfsdfsdfsdf',
//     email: 'sdfsdfsdfsdf',
//   },
//   venues: {},
//   venue: {},
//   artwork: {},
//   singleArtwork: {},
//   venueImage: {}, 
//   venueImages: {},
// }

// const currentUser = useSelector(state => {
//   const currentUserId = state.currentUser.id;
//   const user = state.users.filter(user => {
//     return user.id === currentUserId;
//   });
//   return user[0];
//   return state.users[state.currentUser.id]
// })
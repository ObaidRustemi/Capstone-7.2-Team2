import { NEW_USER, GET_USERS, GET_USER } from "../Actions/actionTypes";

const initialState = [];
// {
//   username: null,
//   firebase_uid: null,
//   phone_number: null,
//   is_venue: false,
//   is_artist: true,
// };

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case NEW_USER:
    case GET_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default users;

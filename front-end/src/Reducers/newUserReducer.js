import { NEW_USER } from "../Actions/actionTypes";

const initialState = {
  username: null,
  firebase_uid: null,
  phone_number: null,
  is_venue: false,
  is_artist: true,
};

const newUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return action.payload;
    default:
      return state;
  }
};

export default newUserReducer;

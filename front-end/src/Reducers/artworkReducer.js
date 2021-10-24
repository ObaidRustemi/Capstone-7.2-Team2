import {
  GET_ARTWORKS,
  GET_ARTWORK,
  GET_USER_ARTWORK,
  GET_SINGLE_ARTWORK,
} from "../Actions/actionTypes";

const initialState = [];

const artworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTWORKS:
      return [...state].concat(action.payload);
    case GET_ARTWORK:
      return [...state, action.payload.user];
    case GET_USER_ARTWORK:
    case GET_SINGLE_ARTWORK:
      return action.payload;
    default:
      return state;
  }
};

export default artworkReducer;

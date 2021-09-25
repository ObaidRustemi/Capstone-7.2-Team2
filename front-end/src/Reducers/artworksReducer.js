import { GET_ARTWORKS, GET_ARTWORK } from "../Actions/actionTypes";

const initialState = [];

const artworksReducer = (state = initialState, action) => {
  console.log("TOP LEVEL IN ARTWORK REDUCER");
  switch (action.type) {
    case GET_ARTWORKS:
      console.log("GET_ARTWORKS case");
      return [...state].concat(action.payload);
    case GET_ARTWORK:
      console.log("GET_ARTWORK case");
      return [...state, action.payload.user];
    default:
      return state;
  }
};

export default artworksReducer;
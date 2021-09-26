import { GET_ARTWORKS, GET_ARTWORK } from "../Actions/actionTypes";

const initialState = [];

const artworkReducer = (state = initialState, action) => {
  console.log("TOP LEVEL IN ARTWORK REDUCER");
 
  switch (action.type) {
     
    case GET_ARTWORKS:
       
      console.log("GET_ARTWORKS case");
      console.log("This is the action GIGI: ", action.payload)
      return [...state].concat(action.payload);
    // or return [...state, ...action.payload]
    case GET_ARTWORK:
      console.log("GET_ARTWORK case");
      return [...state, action.payload.user];
    default:
      return state;
  }
};

export default artworkReducer;
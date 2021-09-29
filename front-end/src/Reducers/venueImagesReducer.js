import { GET_VENUE_IMAGES, GET_VENUE_IMAGE } from "../Actions/actionTypes";

const initialState = [];

const venueImagesReducer = (state = initialState, action) => {
console.log("TOP LEVEL IN VENUE_IMAGES_REDUCER")
switch (action.type) {
    case GET_VENUE_IMAGES:
      console.log("GET_VENUE_IMAGES case");
      return [...state].concat(action.payload);
    // or return [...state, ...action.payload]
    case GET_VENUE_IMAGE:
      console.log("GET_VENUE_IMAGE case");
      return [...state, action.payload.user];
    default:
      return state;
  }
}

export default venueImagesReducer
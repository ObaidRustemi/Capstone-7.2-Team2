import {
  GET_VENUE_IMAGES,
  GET_VENUE_IMAGE,
  SET_UPLOAD_URL,
} from "../Actions/actionTypes";

const initialState = [];

const venueImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VENUE_IMAGE:
      return [...state, action.payload.user];
    case GET_VENUE_IMAGES:
    case SET_UPLOAD_URL:
      return action.payload;
    default:
      return state;
  }
};

export default venueImagesReducer;

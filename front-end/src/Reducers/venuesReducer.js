import { GET_VENUES, GET_VENUE, GET_USER_VENUES } from "../Actions/actionTypes";

const initialState = [];

const venuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VENUE:
      return [...state, action.payload.user];
    case GET_VENUES:
    case GET_USER_VENUES:
      return action.payload;
    default:
      return state;
  }
};

export default venuesReducer;

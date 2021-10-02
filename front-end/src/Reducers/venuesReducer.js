import { GET_VENUES, GET_VENUE, GET_USER_VENUES } from "../Actions/actionTypes";

const initialState = [];

const venuesReducer = (state = initialState, action) => {
 
  console.log("TOP LEVEL IN VENUES REDUCER");
  switch (action.type) {
    case GET_VENUES:
      console.log("GET_VENUES case");
      return action.payload;
    // or return [...state, ...action.payload]
    case GET_VENUE:
      console.log("GET_VENUE case");
      return [...state, action.payload.user];
    case GET_USER_VENUES:
   
      console.log("GET_USER_VENUES case");
      return action.payload;
    default:
      return state;
  }
};

export default venuesReducer;

import { GET_USERS } from "../Actions/actionTypes";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  console.log("TOP LEVEL IN USERS REDUCER");
  switch (action.type) {
    case GET_USERS:
      console.log("GET_USERS case");
      return [...state].concat(action.payload);
      // or return [...state, ...action.payload]
    default:
      return state;
  }
};


export default usersReducer;
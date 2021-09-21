import { GET_USERS, GET_USER } from "../Actions/actionTypes";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  console.log("TOP LEVEL IN USERS REDUCER");
  switch (action.type) {
    case GET_USERS:
      console.log("GET_USERS case");
      return [...state].concat(action.payload);
      // or return [...state, ...action.payload]
    case GET_USER:
      console.log("GET_USER case")
      // action.payload = { user: {}, venues: {} }
      return [...state, action.payload.user]
    default:
      return state;
  }
};


export default usersReducer;
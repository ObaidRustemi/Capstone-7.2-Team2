

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return action.currentUser;
    default:
      return state;
  }
};

export default usersReducer
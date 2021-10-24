import { NEW_USER, GET_USERS, GET_USER } from "../Actions/actionTypes";

const initialState = [];
// {
//   username: null,
//   firebase_uid: null,
//   phone_number: null,
//   is_venue: false,
//   is_artist: true,
// };

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case NEW_USER:
    case GET_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default users;

// const usersState = {
//     'lsdfh3o4tn': {
//         username: 'mashu',
//         uuid: 'lsdfh3o4tn',
//         email: 'sldkfnsldf@dfdf.com'
//     },
//     'wlj2n4gl3jnrg3': {
//         username: 'obaid'.
//         uid" 
//     }
// }

// /users/p34ign3orign3org/profile
// const { id } = useParams();
// const user = useSelector(state => state.users[id]);
// const currentUser = useSelector(state => {
//     return state.users[state.currentUserUid]
// })



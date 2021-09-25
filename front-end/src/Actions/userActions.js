import { GET_USERS, GET_USER, GET_VENUES, GET_VENUE} from "./actionTypes";


export const getUsers = (payload) => {
    return { type: GET_USERS, payload}
}
export const getUser = (payload) => {
    return { type: GET_USER, payload}
}
export const getVenues = (payload) => {
    return { type: GET_VENUES, payload}
}
export const getVenue = (payload) => {
    return { type: GET_VENUE, payload}
}
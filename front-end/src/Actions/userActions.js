import { GET_USERS, GET_USER, GET_VENUES, GET_VENUE, GET_ARTWORKS, GET_ARTWORK} from "./actionTypes";


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
export const getArtworks = (payload) => {
    return { type: GET_ARTWORKS, payload}
}
export const getArtwork = (payload) => {
    return { type: GET_ARTWORK, payload}
}
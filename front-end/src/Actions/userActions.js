import {
  GET_USERS,
  GET_USER,
  GET_USER_VENUES,
  GET_USER_ARTWORK,
  GET_SINGLE_ARTWORK,
  GET_VENUES,
  GET_VENUE,
  GET_ARTWORKS,
  GET_ARTWORK,
  GET_VENUE_IMAGES,
  GET_VENUE_IMAGE,
  NEW_USER
} from "./actionTypes";

export const getUsers = (payload) => {
  return { type: GET_USERS, payload };
};
export const getUser = (payload) => {
  return { type: GET_USER, payload };
};
export const getUserVenues = (payload) => {
  return { type: GET_USER_VENUES, payload };
};
export const getUserArtwork = (payload) => {
  return { type: GET_USER_ARTWORK, payload}
}
export const getSingleArtwork = (payload) => {
  return { type: GET_SINGLE_ARTWORK, payload}
}
export const getVenues = (payload) => {
  return { type: GET_VENUES, payload };
};
export const getVenue = (payload) => {
  return { type: GET_VENUE, payload };
};
export const getArtworks = (payload) => {
  return { type: GET_ARTWORKS, payload };
};
export const getVenueImages = (payload) => {
  return { type: GET_VENUE_IMAGES, payload };
};
export const getVenueImage = (payload) => {
  return { type: GET_VENUE_IMAGE, payload };
};
export const newUser = (payload) => {
  return { type: NEW_USER, payload };
};


import {
  GET_USERS,
  GET_USER,
  GET_USER_VENUES,
  GET_VENUES,
  GET_VENUE,
  GET_ARTWORKS,
  GET_ARTWORK,
  GET_VENUE_IMAGES,
  GET_VENUE_IMAGE,
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

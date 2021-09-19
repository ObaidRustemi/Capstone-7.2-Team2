import { GET_USERS } from "./actionTypes";

export const getUsers = (payload) => {
    return { type: GET_USERS, payload}
}
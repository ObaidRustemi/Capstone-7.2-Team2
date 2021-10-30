const db = require("../db/dbConfig");

const getAllUsers = async () => {
  console.log("getAllUsers");
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const getUser = async (firebase_uid) => {
  console.log("getUser");

  try {
    const data = await db.one(
      "SELECT * FROM users WHERE firebase_uid = $1",
      firebase_uid
    );
    return data;
  } catch (error) {
    console.log("you have hit an error");
    return error;
  }
};

const postUser = async (newUser) => {
  const {
    username,
    firebase_uid,
    image,
    type_of_art,
    description,
    phone_number,
    location,
    is_venue,
    is_artist,
    status
  } = newUser;
  try {
    const user = await db.one(
      "INSERT INTO users(username, firebase_uid, image, type_of_art, description, phone_number, location, is_venue, is_artist, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        username,
        firebase_uid,
        image,
        type_of_art,
        description,
        phone_number,
        location,
        is_venue,
        is_artist,
        status
      ]
    );
    return user;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const editUser = async (user, id) => {
  console.log("editUser");
  console.log(user);
  console.log("this is your id", id)
  const {
    username,
    firebase_uid,
    image,
    type_of_art,
    description,
    phone_number,
    location,
    is_venue,
    is_artist,
    status,
  } = user;
  try {
  
    const updatedUser = await db.one(
      "UPDATE users SET username = $1, firebase_uid = $2, image = $3, type_of_art = $4, description = $5, phone_number = $6, location = $7, is_venue= $8, is_artist= $9, status = $10 WHERE id = $11 RETURNING *",

      [
        username,
        firebase_uid,
        image,
        type_of_art,
        description,
        phone_number,
        location,
        is_venue,
        is_artist,
        status,
        id,
      ]
    );
    console.log("this is the updated user", updatedUser)
    return updatedUser;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const deleteUser = async (firebase_uid) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE firebase_uid= $1 RETURNING *",
      firebase_uid
    );
    return deletedUser;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  postUser,
  editUser,
  deleteUser,
};

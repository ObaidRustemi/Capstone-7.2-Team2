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

const getUser = async (id) => {
  console.log("getUser");

  try {
    const data = await db.one("SELECT * FROM users WHERE id = $1", id);
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
  } = newUser;
  try {
    const user = await db.one(
      "INSERT INTO users(username, firebase_uid, image, type_of_art, description, phone_number, location, is_venue, is_artist) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
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
      ]
    );
    return user;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const editUser = async (user, id) => {
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
  } = user;
  user;
  try {
    const updatedUser = await db.one(
      "UPDATE users SET username = $1, firebase_uid= $2, image = $3 type_of_art = $4, description = $5, phone_number = $6, location = $7, is_venue= $8, is_artist= $9 WHERE id = $10 RETURNING *",
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
        id,
      ]
    );
    return updatedUser;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id= $1 RETURNING *",
      id
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

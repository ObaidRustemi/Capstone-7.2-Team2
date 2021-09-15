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
    const user = await db.any("SELECT * FROM users WHERE id = $1", id);
    return user;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};
const postUser = async (newUser) => {
  const { username, email, password, phone_number, is_artist, is_venue } =
    newUser;
  try {
    const user = await db.any(
      "INSERT INTO users(username, email, password, phone_number, is_artist, is_venue) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [username, email, password, phone_number, is_artist, is_venue]
    );
    return user;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};
const editUser = async (user, id) => {
  const { username, email, password, phone_number, is_artist, is_venue } = user;
  user;
  try {
    const updatedUser = await db.one(
      "UPDATE users SET username = $1, email = $2, password = $3, phone_number = $4, is_artist = $5, is_venue= $6 WHERE id = $7 RETURNING *",
      [username, email, password, phone_number, is_artist, is_venue, id]
    );
    return updatedUser;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const deleteUser = async (id) => {

  try {
    const deletedUser = await db.one("DELETE FROM users WHERE id= $1 RETURNING *", id);
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
  deleteUser
};

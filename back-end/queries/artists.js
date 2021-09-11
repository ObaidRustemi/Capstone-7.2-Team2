const db = require("../db/dbConfig");

const getAllUsers= async () => {
  console.log("getAllUsers");

  try {
    const allUsers= await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
      console.log("you have hit an error")
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
};

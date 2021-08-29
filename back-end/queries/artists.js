const db = require("../db/dbConfig");

const getAllArtists = async () => {
  console.log("getAllArtists");

  try {
    const allArtists = await db.any("SELECT * FROM artists");
    return allArtists;
  } catch (error) {
      console.log("you have hit an error")
    console.log(error);
  }
};

module.exports = {
  getAllArtists,
};

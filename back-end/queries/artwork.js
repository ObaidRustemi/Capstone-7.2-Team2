const artwork = require("../controllers/artworkController");
const db = require("../db/dbConfig");

const getAllArtwork = async (userId) => {
  console.log("getAllArtwork");

  try {
    const allArtwork = await db.any(
      "SELECT * FROM artwork WHERE artist_id = $1",
      userId
    );
    return allArtwork;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};


// const getArtwork = async (artist_id, id) => {

const getArtwork = async (id, artist_id) => {

  console.log("getArtwork");
  console.log("artist id:", artist_id)
  console.log(id)
debugger
  try {

//     const user = await db.one("SELECT * FROM artwork WHERE artist_id = $1 AND id =$2", [artist_id, id]);

    const user = await db.one("SELECT * FROM artwork WHERE id = $1 and artist_id = $2", [id, artist_id]);

    return user;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const postArtwork = async (artwork, userId) => {
  const { title, image } = artwork;
  try {
    const newArtwork = await db.any(
      "INSERT INTO artwork(title, image, artist_id) VALUES ($1, $2, $3) RETURNING *",
      [title, image, userId]
    );
    return newArtwork;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const editArtwork = async (artwork, id) => {
  const { title, image, artist_id } = artwork;
  user;
  try {
    const updatedArtwork = await db.one(
      "UPDATE artwork SET title = $1, image = $2, artist_id = $3 WHERE id = $4 RETURNING *",
      [title, image, artist_id, id]
    );
    return updatedArtwork;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const deleteArtwork = async (id) => {
  try {
    const deletedArtwork = await db.one(
      "DELETE FROM artwork WHERE id= $1 RETURNING *",
      id
    );
    return deletedArtwork;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

module.exports = {
  getAllArtwork,
  getArtwork,
  postArtwork,
  editArtwork,
  deleteArtwork,
};

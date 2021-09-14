const db = require("../db/dbConfig");

const getAllArtwork = async () => {
  console.log("getAllArtwork");

  try {
    const allArtwork = await db.any("SELECT * FROM artwork");
    return allArtwork;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const getArtwork = async (id) => {
  console.log("getArtwork");

  try {
    const user = await db.any("SELECT * FROM artwork WHERE id = $1", id);
    return user;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};
const postArtwork = async (newArtwork) => {
  const { title, image } =
    newArtwork;
  try {
    const artwork = await db.any(
      "INSERT INTO artwork(title, image) VALUES ($1, $2) RETURNING *",
      [title, image]
    );
    return artwork;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};
const editArtwork = async (artwork, id) => {
  const { title, image} = artwork;
  user;
  try {
    const updatedArtwork = await db.one(
      "UPDATE artwork SET title = $1, image = $2 WHERE id = $3 RETURNING *",
      [title, image, id]
    );
    return updatedArtwork;
  } catch (error) {
    console.log("you have hit an error");
    console.log(error);
  }
};

const deleteArtwork = async (id) => {

  try {
    const deletedArtwork = await db.one("DELETE FROM artwork WHERE id= $1 RETURNING *", id);
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
  deleteArtwork
};
const express = require("express");

const users = express.Router();

const { getAllArtwork, getArtwork, postArtwork, editArtwork, deleteArtwork } = require("../queries/users");

artwork.get("/users/:id/artwork", async (req, res) => {
  const allArtwork = await getAllArtwork();
  res.json(allArtwork);
});

artwork.get("/users/:id/artwork/:id", async (req, res) => {
    const { id } = req.params;
  const artwork = await getArtwork(id);
  res.json(artwork);
});

artwork.post("/users/:id/artwork/:id", async (req, res) => {
  const newArtwork = await postArtwork(req.body);
  res.json(newArtwork);
});

artwork.put("/users/:id/artwork/:id", async (req, res) => {
  const { id } = req.params;
  const updatedArtwork = await editArtwork(req.body, id);
  res.json(updatedArtwork);
});

artwork.delete("/users/:id/artwork/:id", async (req, res) => {
  const { id } = req.params;
  const deletedArtwork = await deleteArtwork( id);
  res.json(deletedArtwork);
});

module.exports = artwork;

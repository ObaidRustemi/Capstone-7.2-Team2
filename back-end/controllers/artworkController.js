const express = require("express");

const artwork = express.Router({mergeParams: true});

const { getAllArtwork, getArtwork, postArtwork, editArtwork, deleteArtwork } = require("../queries/artwork");

artwork.get("/", async (req, res) => {
  console.log(req.params)
  const { artist_id } = req.params;
  console.log(artist_id)
  const allArtwork = await getAllArtwork(artist_id);
  console.log(allArtwork)
  res.json(allArtwork);
});

artwork.get("/:id", async (req, res) => {
  console.log(req.params)
    const { id, artist_id} = req.params;
  const artwork = await getArtwork(id, artist_id);
  res.json(artwork);
});

artwork.post("/", async (req, res) => {
  const {artist_id} = req.params;
  const newArtwork = await postArtwork(req.body, artist_id);
  res.json(newArtwork);
});

artwork.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedArtwork = await editArtwork(id, req.body);
  res.json(updatedArtwork(id));
});

artwork.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedArtwork = await deleteArtwork(id);
  res.json(deletedArtwork);
});

module.exports = artwork;

const express = require("express");

const artwork = express.Router({ mergeParams: true });

const {
  getAllArtwork,
  getArtwork,
  postArtwork,
  editArtwork,
  deleteArtwork,
} = require("../queries/artwork");
const { getUser } = require("../queries/users");

artwork.get("/", async (req, res) => {
  const { artist_id } = req.params;
  const allArtwork = await getAllArtwork(artist_id);
  res.json(allArtwork);
});

artwork.get("/:artwork_id", async (req, res) => {
  try {
    const { artist_id, artwork_id } = req.params;
   
    const user = await getUser(artist_id);
    if (user?.id) {
      const artwork = await getArtwork(artist_id, artwork_id);
      res.json({ success: true, payload: { user, artwork } });
    }
  } catch (error) {
    console.log(error);
  }
});

artwork.post("/", async (req, res) => {
  const { artist_id } = req.params;
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

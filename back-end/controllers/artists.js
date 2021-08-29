const express = require("express");

const artists = express.Router();

const { getAllArtists } = require("../queries/artists");

artists.get("/", async (req, res) => {
  const allArtists = await getAllArtists();
  res.json(allArtists);
});

module.exports = artists;

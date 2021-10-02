const express = require("express");

const { getAllVenues } = require("../queries/allVenues");

const allVenues = express.Router();



allVenues.get("/", async (req, res) => {
    const allVenues = await getAllVenues();
    res.json({ success: true, payload: allVenues });
  }); 

  module.exports = allVenues;
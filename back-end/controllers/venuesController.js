const express = require("express");

const venues = express.Router({ mergeParams: true });

const {
  getAllVenuesForUser,
  getVenueForUser,
  newVenueForUser,
  deleteVenue,
  updateVenue,
} = require("../queries/venues");

venues.get("/", async (req, res) => {
  const { owner_id } = req.params;
  const ownerVenues = await getAllVenuesForUser(owner_id);
  res.json({ success: true, payload: ownerVenues });
});

venues.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleUserVenue = await getVenueForUser(id);
    if (singleUserVenue["id"]) {
      res.json({ success: true, payload: singleUserVenue });
    } else {
      throw singleUserVenue;
    }
  } catch (error) {
    res
      .status(404)
      .json({ success: false, payload: "Venue not found", error: error });
  }
});

venues.post("/", async (req, res) => {
  try {
    const { owner_id } = req.params;

    const createdVenue = await newVenueForUser(req.body, owner_id);

    if (owner_id) {
      res.json({ success: true, payload: createdVenue });
    } else {
      throw createdVenue;
    }
  } catch (error) {
    res.status(422).json({
      success: false,
      payload: "Must enter required field",
      error: error,
    });
  }
});

venues.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVenue = await deleteVenue(id);
    if (deletedVenue["id"]) {
      res.json({ success: true, payload: deletedVenue });
    } else {
      throw deletedVenue;
    }
  } catch (error) {
    res
      .status(404)
      .json({ success: false, payload: "Venue not found", error: error });
  }
});

venues.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVenue = await updateVenue(id, req.body);
    if (updatedVenue["id"]) {
      res.json({ success: true, payload: updatedVenue });
    } else {
      throw updatedVenue;
    }
  } catch (error) {
    res
      .status(422)
      .json({ success: false, payload: "Must enter valid data", error: error });
  }
});

module.exports = venues;
const express = require("express");

const venueImages = express.Router({ mergeParams: true });

const {
  getAllImagesForVenue,
  getImageForVenue,
  newImageForVenue,
  deleteVenueImage,
  updateVenueImage
} = require("../queries/venueImages");

venueImages.get("/", async (req, res) => {
  const { venue_id } = req.params;
  const venueImages = await getAllImagesForVenue(venue_id);
  res.json({ success: true, payload: venueImages });
});

venueImages.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleImageForVenue = await getImageForVenue(id);
    console.log(singleImageForVenue["id"])
    if (singleImageForVenue["id"]) {
      res.json({ success: true, payload: singleImageForVenue });
    } else {
      throw singleImageForVenue;
    }
  } catch (error) {
    res
      .status(404)
      .json({ success: false, payload: "Venue image not found", error: error });
  }
});

venueImages.post("/", async (req, res) => {
  try {
    const { venue_id } = req.params;

    const createdImage = await newImageForVenue(req.body, venue_id);

    if (venue_id) {
      res.json({ success: true, payload: createdImage });
    } else {
      throw createdImage;
    }
  } catch (error) {
    res.status(422).json({
      success: false,
      payload: "Must enter required field",
      error: error,
    });
  }
});

venueImages.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedVenueImage = await deleteVenueImage(id);
      if (deletedVenueImage["id"]) {
        res.json({ success: true, payload: deletedVenueImage });
      } else {
        throw deletedVenueImage;
      }
    } catch (error) {
      res
        .status(404)
        .json({ success: false, payload: "Venue image not found", error: error });
    }
  });

  venueImages.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updatedVenueImage = await updateVenueImage(id, req.body);
      if (updatedVenueImage["id"]) {
        res.json({ success: true, payload: updatedVenueImage });
      } else {
        throw updatedVenueImage;
      }
    } catch (error) {
      res
        .status(422)
        .json({ success: false, payload: "Must enter valid data", error: error });
    }
  });

module.exports = venueImages;

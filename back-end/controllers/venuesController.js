const express = require("express");
const venueImagesController = require("./venueImagesController");

const venues = express.Router({ mergeParams: true });

const {
  getAllVenues,
  getAllVenuesForUser,
  getVenueForUser,
  newVenueForUser,
  deleteVenue,
  updateVenue,
} = require("../queries/venues");

const { getUser } = require("../queries/users");

const { getAllImagesForVenue } = require("../queries/venueImages");

venues.use("/:venue_id/venue_images", venueImagesController);

venues.get("/", async (req, res) => {
  const { owner_id } = req.params;
console.log("this is the owner_id: ", owner_id)
  const user = await getUser(owner_id);
  const ownerVenues = await getAllVenuesForUser(owner_id);
  res.json({ success: true, payload: ownerVenues });
  // =======
  // const allVenues = await getAllVenues();
  // res.json({ success: true, payload: allVenues });
  // >>>>>>> main
  // =======
  //   const allVenues = await getAllVenues();
  //   res.json({ success: true, payload: allVenues });
  // >>>>>>> origin/carlohomepage
});

// venues.get("/", async (req, res) => {
//   const allVenues = await getAllVenues();
//   res.json({ success: true, payload: allVenues });
// });

// venues.get("/", async (req, res) => {
//   const { owner_id } = req.params;
//   const ownerVenues = await getAllVenuesForUser(owner_id);
//   res.json({ success: true, payload: ownerVenues });
// });

venues.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const singleUserVenue = await getVenueForUser(id);
    const allImagesForVenue = await getAllImagesForVenue(id);

    if (singleUserVenue["id"]) {
      res.json({
        success: true,
        payload: { singleUserVenue, allImagesForVenue },
      });
    } else {
      throw (singleUserVenue, allImagesForVenue);
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
    const updatedVenueList = await getAllVenuesForUser(owner_id);
    console.log(updatedVenueList);
    console.log(createdVenue);
    console.log(owner_id);
    if (owner_id) {
      console.log("venue created");
      res.json({ success: true, payload: updatedVenueList });
      console.log(createdVenue);
    } else {
      console.log("post error");
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
    console.log(id)
    const updatedVenue = await updateVenue(id, req.body);
    if (updatedVenue["id"]) {
      res.json({ success: true, payload: updatedVenue });
    } else {
      throw updatedVenue;
    }
  } catch (error) {
    console.log(error)
    res
      .status(422)
      .json({ success: false, payload: "Must enter valid data", error: error });
  }
});

module.exports = venues;

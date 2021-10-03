const express = require("express");

const artworkController = require("./artworkController");
const venuesController = require("./venuesController");

const users = express.Router();

const {
  getAllUsers,
  getUser,
  postUser,
  editUser,
  deleteUser,
} = require("../queries/users");
const { getAllVenuesForUser } = require("../queries/venues");
const { getAllArtwork } = require("../queries/artwork");

users.use("/:artist_id/artwork", artworkController);

users.use("/:owner_id/venues", venuesController);


users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json({ success: true, payload: allUsers });
});

users.get("/:firebase_uid", async (req, res) => {
  // const data = await getUser(firebase_uid, isVenueOwner); { user: {}, venues: [{}] }

  try {
    const { firebase_uid } = req.params;
    const user = await getUser(firebase_uid);
    
    if (user?.is_venue) {
      const venues = await getAllVenuesForUser(user.firebase_uid);

      res.json({
        success: true,
        payload: { user, venues },
      });
    } else if (user?.is_artist) {
      const userArtwork = await getAllArtwork(user.firebase_uid);

      res.json({
        success: true,
        payload: { user, userArtwork },
      });
    } else {
      console.log("inside the throw");
      throw user;
    }
  } catch (error) {
    res
      .status(404)
      .json({ success: false, payload: "User not found", error: error });
  }
});

users.post("/", async (req, res) => {
  try {
    const newUser = await postUser(req.body);
    if (newUser) {
      res.json({ success: true, payload: newUser });
    } else {
      throw newUser;
    }
  } catch (error) {
    res.status(422).json({
      success: false,
      payload: "Must enter required field",
      error: error,
    });
  }
});

users.put("/:firebase_uid", async (req, res) => {
  try {
    const { firebase_uid } = req.params;
    const updatedUser = await editUser(req.body, firebase_uid);
    if (updatedUser["id"]) {
      res.json({ success: true, payload: updatedUser });
    } else {
      throw updatedUser;
    }
  } catch (error) {
    res
      .status(422)
      .json({ success: false, payload: "Must enter valid data", error: error });
  }

  // res.json(updatedUser);
});

users.delete("/:firebase_uid", async (req, res) => {
  try {
    const { firebase_uid } = req.params;
    const deletedUser = await deleteUser(firebase_uid);
    if (deletedUser["id"]) {
      res.json({ success: true, payload: deletedUser });
    } else {
      throw deletedUser;
    }
  } catch (error) {
    res
      .status(404)
      .json({ success: false, payload: "User not found", error: error });
  }
});

module.exports = users;

const express = require("express");
// import artwork from "./artworkController";
const artworkController = require("./artworkController")
const venuesController = require("./venuesController")

const users = express.Router();
// const artwork = express.Router();

const { getAllUsers, getUser, postUser, editUser, deleteUser } = require("../queries/users");
users.use("/:artist_id/artwork", artworkController);


users.use("/:owner_id/venues", venuesController);

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json(allUsers);
});

users.get("/:id", async (req, res) => {
    const { id } = req.params;
  const user = await getUser(id);
  res.json(user);
});

users.post("/", async (req, res) => {
  const newUser = await postUser(req.body);
  res.json(newUser);
});

users.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await editUser(req.body, id);
  res.json(updatedUser);
});

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser( id);
  res.json(deletedUser);
});

module.exports = users;

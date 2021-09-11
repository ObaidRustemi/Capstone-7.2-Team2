const express = require("express");

const users = express.Router();

const { getAllUsers, getUser } = require("../queries/users");

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json(allUsers);
});

users.get("/:id", async (req, res) => {
    const { id } = req.params;
  const user = await getUser(id);
  res.json(user);
});

module.exports = users;

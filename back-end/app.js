// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const usersController = require("./controllers/usersController")
// const artworkController = require("./controllers/artworkController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// USERS ROUTE
app.use("/users", usersController)
// app.use("/users/:id/artwork", artworkController)


// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/test", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM test");
    res.json(allDays);
  } catch (err) {
    res.json(err);
  }
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;

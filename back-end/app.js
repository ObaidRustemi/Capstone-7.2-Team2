// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const artistsController = require("./controllers/artists")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ARTISTS ROUTE
app.use("/artists", artistsController)

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

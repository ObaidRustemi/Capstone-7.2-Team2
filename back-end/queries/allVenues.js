const db = require("../db/dbConfig");

const getAllVenues = async () => {
    console.log("getAllVenues");
    try {
      const allVenues = await db.any("SELECT * FROM venues");
      return allVenues;
    } catch (error) {}
  };

  module.exports = {
    getAllVenues,
   
  };
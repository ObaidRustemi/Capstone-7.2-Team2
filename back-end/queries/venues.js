const db = require("../db/dbConfig");

// const getAllVenues = async () => {
//   console.log("getAllVenues");
//   try {
//     const allVenues = await db.any("SELECT * FROM venues");
//     return allVenues;
//   } catch (error) {}
// };

const getAllVenuesForUser = async (userId) => {
  console.log(userId);
  try {
    const allVenuesForUser = await db.any(
      `SELECT * FROM venues WHERE owner_id = $1`,
      userId
    );

    return allVenuesForUser;
  } catch (error) {
    return error;
  }
};

const getVenueForUser = async (id) => {
  console.log("getVenueForUser");
  try {
    const singleVenueForUser = await db.one(
      `SELECT * FROM venues WHERE id = $1`,
      id
    );
    return singleVenueForUser;
  } catch (error) {
    return error;
  }
};

const newVenueForUser = async (venue, userId) => {
  console.log("newVenueForUser");
  const { name, address, venue_profile_photo, venue_info, owner_id, price} = venue;
  try {
    const newVenue = await db.one(
      `
          INSERT INTO venues (name, venue_profile_photo, owner_id, venue_info, address, price) 
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING *
      `,
      [name, venue_profile_photo, owner_id, venue_info, address, price, userId]
    );

    return newVenue;
  } catch (error) {
    return error;
  }
};

const deleteVenue = async (id) => {
  console.log("deleteVenue");
  try {
    const deletedVenue = await db.one(
      `
          DELETE FROM venues
          WHERE id = $1
          RETURNING * 
      `,
      id
    );
    return deletedVenue;
  } catch (error) {
    return error;
  }
};

const updateVenue = async (id, venue) => {
  console.log("updateVenue");
  const { name, address, venue_profile_photo, venue_info, owner_id, price} = venue;
  try {
    const updatedVenue = await db.one(
      `
          UPDATE venues
          SET name = $1, address = $2, venue_profile_photo = $3, venue_info = $4, owner_id = $5, price = $6
          WHERE id = $7
          RETURNING * 
      `,
      [name, address, venue_profile_photo, venue_info, owner_id, price, id]
    );
    return updatedVenue;
  } catch (error) {
    return error;
  }
};

module.exports = {
  // getAllVenues,
  getAllVenuesForUser,
  getVenueForUser,
  newVenueForUser,
  deleteVenue,
  updateVenue,
};

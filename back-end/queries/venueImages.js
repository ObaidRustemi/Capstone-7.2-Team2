const venueImages = require("../controllers/venueImagesController");
const db = require("../db/dbConfig");

const getAllImagesForVenue = async (venueId) => {
  console.log("getAllImagesForVenue");
  try {
    const allPhotosForVenue = await db.any(
      `SELECT * FROM venue_images WHERE venue_id = $1`,
      venueId
    );
    return allPhotosForVenue;
  } catch (error) {
    return error;
  }
};

const getImageForVenue = async (id) => {
  console.log("getImageForVenue");
  try {
    const singleImageForVenue = await db.one(
      `SELECT * FROM venue_images WHERE id = $1`,
      id
    );
    return singleImageForVenue;
  } catch (error) {
    return error;
  }
};

const newImageForVenue = async (image, venueId) => {
  console.log("newImageForVenue");
  const { photo_url } = image;
  try {
    const newImageForVenue = await db.one(
      `
            INSERT INTO venue_images (photo_url, venue_id) 
            VALUES ($1, $2)
            RETURNING *
        `,
      [photo_url, venueId]
    );

    return newImageForVenue;
  } catch (error) {
    return error;
  }
};

const deleteVenueImage = async (id) => {
    console.log("deleteVenueImage");
    try {
      const deletedVenueImage = await db.one(
        `
            DELETE FROM venue_images
            WHERE id = $1
            RETURNING * 
        `,
        id
      );
      return deletedVenueImage;
    } catch (error) {
      return error;
    }
  };

  const updateVenueImage = async (id, venueImage) => {
    console.log("updateVenueImage");
    const { photo_url, venue_id } = venueImage;
    try {
      const updatedVenueImage = await db.one(
        `
            UPDATE venue_images
            SET photo_url = $1, venue_id = $2
            WHERE id = $3
            RETURNING * 
        `,
        [photo_url, venue_id, id]
      );
      return updatedVenueImage;
    } catch (error) {
      return error;
    }
  };

module.exports = {
  getAllImagesForVenue,
  getImageForVenue,
  newImageForVenue,
  deleteVenueImage,
  updateVenueImage
};

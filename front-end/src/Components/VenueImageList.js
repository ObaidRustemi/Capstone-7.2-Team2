import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../Styling/VenueInfo.css";
import Modal from "./Modal";
import VenueImageListItem from "./VenueImageListItem";
import VenueEditContainer from "../Containers/VenueEditContainer";
import useCurrentUser from "../util/useCurrentUser";
import { useHistory } from "react-router-dom";


const VenueImageList = ({
  currentVenue,
  venueImages,
  selectedImg,
  setSelectedImg,
  setVenueChange,
  venueChange,
}) => {
  const [editVenue, setEditVenue] = useState(null);
  const [showHideButton, setShowHideButton] = useState(null);
  const [showEditButton, setShowEditButton] = useState(null);
  const currentUser = useCurrentUser();
  const { firebase_uid } = useParams();
  const history = useHistory();

  console.log(currentUser?.firebase_uid);
  console.log(firebase_uid);

  useEffect(() => {
    const checkEditAuth = async () => {
      (await currentUser?.firebase_uid) === firebase_uid
        ? setShowEditButton(true)
        : setShowEditButton(null);
    };
    //   (await "ZE6t5nOcxwMMhFxtaanEMBSWlYn2") === firebase_uid
    //     ? setShowEditButton(true)
    //     : setShowEditButton(null);
    // };
    checkEditAuth();
  }, []);

  const contact = () => {
      history.push('/contact')
  }

  return (
    <div className="venue-info-container">
      <h2>{currentVenue.name}</h2>
      <img
        className="venue-profile-photo"
        src={currentVenue.venue_profile_photo}
        alt=""
      />
      <div className="venue-bottom-container">
        <div className="combined-image-blurb-container">
          <div className="venue-blurb-container">
            <p>{currentVenue.venue_info}</p>
            <p>{currentVenue.address}</p>
          </div>
          <div className="venue-image-list-container">
            {venueImages.length > 0
              ? venueImages.map((image) => {
                return (
                  <VenueImageListItem
                  key={image.id}
                  setSelectedImg={setSelectedImg}
                  image={image}
                  />
                  );
                })
                : null}
          </div>
        </div>
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        <div className="button-and-form-container">
          {editVenue ? (
            <VenueEditContainer
            setVenueChange={setVenueChange}
            currentVenue={currentVenue}
            setShowHideButton={setShowHideButton}
            venueChange={venueChange}
            />
            ) : null}
          {!showEditButton ? null : (
            <button
            className="show-edit-button"
            onClick={() => setEditVenue(true)}
            >
              Edit Venue
            </button> 
          )}
          <button onClick={() => {contact()}}>Contact</button>
          {/* {showEditButton? 
          : null} */}
          {showHideButton ? (
            <button
            className="hide-button"
            onClick={() => {
              setEditVenue(false);
              setShowHideButton(false);
            }}
            >
              Hide
            </button>
          ) : null}
      </div>
        </div>
    </div>
  );
};

export default VenueImageList;

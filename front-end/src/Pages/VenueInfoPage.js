import React from 'react'
import "../Styling/VenueInfoPage.css"
import VenueImageList from '../Components/VenueImageList'

const VenueInfoPage = ({currentVenue, venueImages}) => {

    return (
        <div className="venue-info-container">
            <h1>Venue Info</h1>
            <VenueImageList currentVenue={currentVenue} venueImages={venueImages}/>
        </div>
    )
}

export default VenueInfoPage

import React from 'react'
import "../Styling/VenueInfoPage.css"
import VenueImageList from '../Components/VenueImageList'

const VenueInfoPage = ({currentVenue, venueImages}) => {

    return (
        <div>
            
            <VenueImageList currentVenue={currentVenue} venueImages={venueImages}/>
        </div>
    )
}

export default VenueInfoPage

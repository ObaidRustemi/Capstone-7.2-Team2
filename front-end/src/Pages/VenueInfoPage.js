import React from 'react'
import "../Styling/VenueInfoPage.css"
import VenueImageList from '../Components/VenueImageList'

const VenueInfoPage = ({currentVenue, venueImages, selectedImg, setSelectedImg}) => {

    return (
        <div>
            
            <VenueImageList selectedImg={selectedImg} setSelectedImg={setSelectedImg} currentVenue={currentVenue} venueImages={venueImages}/>
        </div>
    )
}

export default VenueInfoPage

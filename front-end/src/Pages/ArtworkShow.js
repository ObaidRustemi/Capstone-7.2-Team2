import React from 'react'
import ArtworkInfo from '../Components/ArtworkInfo'
import "../Styling/ArtworkInfo.css"

const ArtworkShow = ({image}) => {
    return (
        <div>
            <h1>Artwork Details</h1>
            <ArtworkInfo image={image} />
        </div>
    )
}

export default ArtworkShow

import React from 'react'
import ArtworkInfo from '../Components/ArtworkInfo'
import "../Styling/ArtworkInfo.css"

const ArtworkShow = ({user}) => {
   console.log(user)
    return (
        <div>
            <h1>Artwork Details</h1>
            <ArtworkInfo user={user}/>
        </div>
    )
}

export default ArtworkShow

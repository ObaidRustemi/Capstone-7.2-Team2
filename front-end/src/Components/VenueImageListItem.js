import React from 'react'

const VenueImageListItem = ({image}) => {
    return (
        <div>
          <img  src={image.photo_url}/>  
        </div>
    )
}

export default VenueImageListItem

import React from 'react'
import "../Styling/VenueInfo.css";
import { motion } from 'framer-motion'

const VenueImageListItem = ({image, setSelectedImg}) => {
  

    return (
        <motion.div className="img-wrap-div" key={image.id}
        layout
        whileHover ={{opacity: 1}}
        onClick={() => setSelectedImg(image.photo_url)}
        >
          <motion.img  src={image.photo_url}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.75}}
          />  
        </motion.div>
    )
}

export default VenueImageListItem

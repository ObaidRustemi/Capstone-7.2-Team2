import React from 'react'
import { useSelector } from 'react-redux';

export default function Switch({onChange, users }) {
console.log(users)

// const venues = users.filter(user => user.is_venue)
    return (
        <div>
        <label className="switch">
        <input type="checkbox" onChange={onChange}/>
        <span className="slider" rounded/>
        {/* <p>{venues.map(venue => venue.username)}</p> */}
      </label>
        </div>
    )
}

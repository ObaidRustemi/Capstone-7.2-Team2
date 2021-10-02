import React from 'react'

export default function Switch({onChange}) {
    return (
        <div className="toggle_position">
        <h1>Find Venues</h1>
        <label className="switch">
        <input type="checkbox" onChange={onChange}/>
        <span className="slider" rounded/>
      </label>
        <h1>Find Artists</h1>
        </div>
    )
}

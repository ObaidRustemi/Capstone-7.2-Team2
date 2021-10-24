import React from "react";
import "../Styling/Switch.css";

export default function Switch({ onChange }) {
  return (
    <div className="toggle_position">
      <h1>Find Venues</h1>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider" rounded ="true"/>
      </label>
      <h1>Find Artists</h1>
    </div>
  );
}

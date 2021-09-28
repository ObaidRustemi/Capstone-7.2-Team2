import { useState, useEffect } from "react";
import UploadForm from "./UploadForm";

export default function VenueOwnerUpdate() {

  return (
    <div>
      <form >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
        //   value={}
          type="text"
        //   onChange={handleTextChange}
          placeholder="Full Name"
        //   required
        />
        <label htmlFor="profile-photo">Upload New Profile Photo</label>
        <UploadForm />
      </form>
    </div>
  );
}

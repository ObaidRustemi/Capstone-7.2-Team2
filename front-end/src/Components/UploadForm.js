import React, { useState } from "react";
// import { useStorage } from "../Components/UseStorage";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please enter a file of extension (png or jpeg)");
    }
  };

  return (
    <form>
      <label>title</label>
      <input type="file" onChange={changeHandler} />
      <div>
        {error && <div> {error} </div>}
        {file && <div> {file.name} </div>}

      </div>
    </form>
  );
};

export default UploadForm;

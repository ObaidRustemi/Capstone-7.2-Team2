import React, { useState } from "react";
// import UseStorage from "../Components/UseStorage";
import { storage } from "../firebase/Firebase";

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

  const handleUpload = () => {
    if (file) {
      debugger;
      // UseStorage(file)
      const uploadTask = storage.ref(`/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        () => {
          storage
            .ref(`/${file.name}`)
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
            });
        }
      );

      debugger;
    } else {
      window.alert("Please choose a file first!");
    }
  };

  return (
    <div>
      <form>
        <label>title</label>
        <input type="file" onChange={changeHandler} />
        <div>
          {error && <div> {error} </div>}
          {file && <div> {file.name} </div>}
        </div>
      </form>
      <div>
        <button onClick={handleUpload}> upload</button>
      </div>

      {file&& <img src={file.name}  alt="file pic"/>}
    </div>
  );
};

export default UploadForm;

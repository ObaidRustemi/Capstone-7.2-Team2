import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import UseStorage from "../Components/UseStorage";
import { storage } from "../firebase/Firebase";
import "../Styling/UserIndex.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const currentUser = useSelector((state) => state.currentUser);

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
      debugger
      const uploadTask = storage.ref(`/${currentUser.uid}/${file.name}`).put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        },
        (error) => {
          setError(error);
        },
        async () => {
          const url = await storage
            .ref(`/${currentUser.uid}/${file.name}`)
            .getDownloadURL();
          if (url) {
            setUrl(url);
          } else {
            setUrl(null);
          }
        }
      );
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
        <button onClick={handleUpload}>upload</button>
      </div>
      {url && <img src={url} alt="file pic" className="upload-preview-image" />}
      <p>{progress && progress}</p>
    </div>
  );
};

export default UploadForm;

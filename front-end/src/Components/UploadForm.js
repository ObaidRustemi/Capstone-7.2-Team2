import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../firebase/Firebase";
import "../Styling/UserIndex.css";
import { setUploadUrl } from "../Actions/userActions";
import useCurrentUser from "../util/useCurrentUser";

const UploadForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const currentUser = useCurrentUser();
  // const uploadUrl = useSelector((state) => state.uploadUrl);

  useEffect(() => {
    setUrl(null);
  }, []);

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
      const uploadTask = storage
        .ref(`/${currentUser.firebase_uid}/${file.name}`)
        .put(file);

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
            .ref(`/${currentUser.firebase_uid}/${file.name}`)
            .getDownloadURL();
          if (url) {
          
            setUrl(url);
            const action = setUploadUrl(url);
            dispatch(action);
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
        <label>Upload Venue Profile Photo</label>
        <input type="file" onChange={changeHandler} />
        <div>
          {error && <div> {error} </div>}
          {file && <div> {file.name} </div>}
        </div>
      </form>
      <div>
        <button onClick={handleUpload}>upload</button>
      </div>
      <p>{progress && progress}</p>
     {url && <img src={url} alt="file pic" className="upload-preview-image" />}
    </div>
  );
};

export default UploadForm;

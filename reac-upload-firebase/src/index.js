import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "./firebase";

const ReactFirebaseFileUpload = () => {
  const [image, setimage] = useState(null);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // console.log(url);
            setUrl(url);
          });
      }
    );
  };

  return (
    <div>
      Hi All
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

render(<ReactFirebaseFileUpload />, document.querySelector("#root"));

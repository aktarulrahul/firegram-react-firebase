/* eslint-disable no-undef */
import React, { useState } from "react";
const UploadForm = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [file, setFile] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    const types = ["image/png", "image/jpeg"];
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file(png or jpeg).");
    }
  };
  return (
    <form>
      <input type="file" onChange={changeHandler} />

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;

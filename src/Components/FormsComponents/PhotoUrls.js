import React, { useState } from "react";

import PhotoUrl from "./PhotoUrl";

function PhotoUrls(props) {
  const [urls, setUrls] = useState(props.urls);

  let showDeleteBtn;
  if (urls.length == 1) showDeleteBtn = false;
  else showDeleteBtn = true;

  function handlePhotoUrl(value, index) {
    const newUrls = urls;
    newUrls[index] = value;
    setUrls(newUrls);
    console.log(newUrls);
    props.updateDataUrls(urls);
  }

  function addPhotoUrl() {
    const newUrls = urls;
    console.log(newUrls);
    newUrls.push("");
    setUrls(newUrls);
    props.updateDataUrls(urls);
    console.log(newUrls);
  }

  function deletePhotoUrl(index) {
    const newUrls = urls;
    console.log(newUrls);
    newUrls.splice(index, 1);
    setUrls(newUrls);
    props.updateDataUrls(urls);
    console.log(newUrls);
  }

  console.log("da");

  return (
    <div>
      {urls.map((photoUrl, index) => (
        <PhotoUrl
          key={index}
          index={index}
          showDeleteBtn={showDeleteBtn}
          onChange={handlePhotoUrl}
          onDelete={deletePhotoUrl}
          id={"photoUrls:[" + index + "]"}
          value={photoUrl}
          placeholder={"PhotoUrl " + (index + 1)}
          type={"text"}
        />
      ))}
      <button type="button" onClick={addPhotoUrl} className="btn btn-primary">
        Adauga Url
      </button>
    </div>
  );
}

export default PhotoUrls;

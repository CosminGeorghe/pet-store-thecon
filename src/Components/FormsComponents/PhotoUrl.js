import React, { useState } from "react";

import "./PhotoUrl.css";

function PhotoUrl(props) {
  const changeHandler = (event) => {
    props.onChange(event.target.value, props.index);
  };

  return (
    <div className="urls">
      <label for="props.id">PHOTO URL {props.index + 1}</label>
      <input
        onChange={changeHandler}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
      ></input>
      {props.showDeleteBtn && (
        <button
          type="button"
          onClick={() => {
            props.onDelete(props.index);
          }}
          className="btn btn-danger"
        >
          Sterge url
        </button>
      )}
    </div>
  );
}

export default PhotoUrl;

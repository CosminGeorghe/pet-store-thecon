import React, { useState } from "react";

function PhotoUrl(props) {
  const changeHandler = (event) => {
    props.onChange(event.target.value, props.index);
  };

  return (
    <div>
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
        >
          Sterge url
        </button>
      )}
    </div>
  );
}

export default PhotoUrl;

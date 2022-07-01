import React from "react";

import "./Tag.css"

function Tag(props) {
  const changeIdHandler = (event) => {
    props.onChangeId(event.target.value, props.index);
  };

  const changeNameHandler = (event) => {
    props.onChangeName(event.target.value, props.index);
  };


  return (
    <div className="tags">
      <div style={{float:"left", marginRight: "1%",}}>
        <label for={"tag:[" + props.index + "].id"}>ID {props.index + 1}</label>
      <input
        onChange={changeIdHandler}
        id={"tag:[" + props.index + "].id"}
        value={props.tag.id}
        placeholder={"id "+ (props.index+1)}
        type="number"
      ></input>
      </div>
      <div>
      <label for={"tag:[" + props.index + "].name"}>NAME {props.index + 1}</label>
      <input
        onChange={changeNameHandler}
        id={"tag:[" + props.index + "].name"}
        value={props.tag.name}
        placeholder={"name "+ (props.index+1)}
        type="text"
      ></input>
      </div>
      {props.showDeleteBtn && (
        <button
        className="btn btn-danger"
          type="button"
          onClick={() => {
            props.onDelete(props.index);
          }}
        >
          Sterge tag
        </button>
      )}
    </div>
  );
}

export default Tag;

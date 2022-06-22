import React from "react";

function Button(props) {
  const changeIdHandler = (event) => {
    props.onChangeId(event.target.value, props.index);
  };

  const changeNameHandler = (event) => {
    props.onChangeName(event.target.value, props.index);
  };


  return (
    <div>
      <input
        onChange={changeIdHandler}
        id={"tag:[" + props.index + "].id"}
        value={props.tag.id}
        placeholder={"id "+ (props.index+1)}
        type={props.type}
      ></input>
      <input
        onChange={changeNameHandler}
        id={"tag:[" + props.index + "].name"}
        value={props.tag.name}
        placeholder={"name "+ (props.index+1)}
        type={props.type}
      ></input>
      {props.showDeleteBtn && (
        <button
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

export default Button;

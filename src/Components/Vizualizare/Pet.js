import React from "react";

const Pet = (props) => {
  console.log(props.data);
  return (
    <div>
      <h2>{props.data.id + ". " + props.data.name}</h2>
      <h2>{props.data.status}</h2>
      {props.data.photoUrls.map((url) => (
        <img src={url} style={{ maxWidth: "600px" }}></img>
      ))}
      <h3>Category {props.data.category.id + ". "} {props.data.category.name}</h3>
      {props.data.tags.map((tag) => (
        <p>{tag.id+". "+tag.name}</p>
      ))}
    </div>
  );
};

export default Pet;

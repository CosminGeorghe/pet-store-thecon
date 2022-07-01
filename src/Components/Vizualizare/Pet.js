import React from "react";

const Pet = (props) => {
  console.log(props.data);
  const data = props.data;
  return (
    <div>
      <h2>{data.id + ". "  }{data.name !== undefined && data.name !== "" ? data.name : "Nu exista nume"}</h2>
      <h2  style={{float:"left"}}>Status:&nbsp;</h2>
      {data.status !== "" && <h2>{data.status}</h2>}
      {data.status === "" && <h2>"nu are status"</h2>}

      {data.photoUrls[0] === "string"  && <p>Nu exista imagini</p>}
      {data.photoUrls[0] !== "string" && data.photoUrls.map((url) => (
        <img src={url} style={{ maxWidth: "600px" }}></img>
      ))}

      {data.category.id === 0 && data.category.name === "" && (
        <h3>Nu exista categorii</h3>
      )}
      {(data.category.id !== 0 || data.category.name !== "") && (   <h3>    Category: {data.category.id + ". "} {data.category.name}    </h3>     )}
      <h3>Tags:</h3>
       {data.tags[0].id ===0 && (data.tags[0].name === "" || data.tags[0].name === 'string') && <p>Nu exista taguri</p>} 
      {!(data.tags[0].id ===0 && (data.tags[0].name === "" || data.tags[0].name === 'string')) && data.tags.map((tag) => (
        <p>{tag.id + ". " + tag.name}</p>
      ))}
    </div>
  );
};

export default Pet;

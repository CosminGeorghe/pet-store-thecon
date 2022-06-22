import React, { useState } from "react";

import { Link } from "react-router-dom";

import PhotoUrls from "../FormsComponents/PhotoUrls";
import Tags from "../FormsComponents/Tags";

import Axios from "axios";

function Formular() {
  const url = "https://petstore.swagger.io/v2/pet";

  const [data, setData] = useState({
    id: "",
    category: {
      id: "",
      name: "",
    },
    name: "",
    photoUrls: [""],
    tags: [
      {
        id: "",
        name: "",
      },
    ],
    status: "",
  });

  function handle(e) {
    const newData = { ...data };
    console.log(newData["category"]["name"]);
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleCategory(e) {
    const newData = { ...data };
    newData["category"][e.target.id] = e.target.value;
    console.log(newData["category"][e.target.id]);
    console.log(newData);
    setData(newData);
  }

  function updateDataUrls(urls){
    const newData = { ...data };
    newData.photoUrls =urls;
    setData(newData);
    console.log(data);
  }

  function updateDataTags(tags){
    const newData = { ...data };
    newData.tags =tags;
    setData(newData);
    console.log(data);
  }
  


  

  function submit(e) {
    console.log(data);
    e.preventDefault();
    Axios.post(url, {
      id: data.id,
      category: data.category,
      name: data.name,
      photoUrls: data.photoUrls,
      tags: data.tags,
      status: data.status,
    }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <input
        onChange={(e) => handle(e)}
        id="id"
        value={data.id}
        placeholder="id"
        type="text"
      ></input>
      <input
        onChange={(e) => handle(e)}
        id="name"
        value={data.name}
        placeholder="name"
        type="text"
      ></input>
      <input
        onChange={(e) => handle(e)}
        id="status"
        value={data.status}
        placeholder="status"
        type="text"
      ></input>
      <hr></hr>
      <p>category</p>
           <input
        onChange={(e) => handleCategory(e)}
        id="id"
        value={data.category.id}
        placeholder="id"
        type="text"
      ></input>
           <input
        onChange={(e) => handleCategory(e)}
        id="name"
        value={data.category.name}
        placeholder="name"
        type="text"
      ></input>
      <hr></hr>
      <PhotoUrls urls ={data.photoUrls} updateDataUrls={updateDataUrls} />
      <hr></hr>
      <p>Tags</p>
      <Tags tags ={data.tags} updateDataTags={updateDataTags} />
    
      <hr></hr>
      <button type="submit">Submit</button>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <button>Intoarcete la lista</button>
      </Link>
    </form>
  );
}

export default Formular;

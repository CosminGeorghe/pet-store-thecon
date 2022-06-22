import React, { useState, useCallback } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

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
    status: "available",
  });

  function handle(e) {
    const newData = { ...data };
    console.log(newData["category"]["name"]);
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleStatus (e) {
    const newData = { ...data };
    newData["status"] = e.target.value;
    console.log(newData);
    setData(newData);
  }

  function handleCategory(e) {
    const newData = { ...data };
    newData["category"][e.target.id] = e.target.value;
    console.log(newData["category"][e.target.id]);
    console.log(newData);
    setData(newData);
  }

  function updateDataUrls(urls) {
    const newData = { ...data };
    newData.photoUrls = urls;
    setData(newData);
    console.log(data);
  }

  function updateDataTags(tags) {
    const newData = { ...data };
    newData.tags = tags;
    setData(newData);
    console.log(data);
  }

  const validateId = () => {
    if (data.id === "") return false;
    if (isNaN(data.id)) return false;
    return true;
  };

  const validateName = () => {
    if (data.name === "") return false;
    return true;
  };

  const navigate = useNavigate();
  const navigateToListare = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  function submit(e) {
    e.preventDefault();

    if (validateId() && validateName()) {
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

      navigateToListare();
    } else console.log("bad");
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
      <select onChange={(e) => handleStatus(e)} name="status" id="status">
        <option value="Availabe">Availabe</option>
        <option value="Pending">Pending</option>
        <option value="Sold">Sold</option>
      </select>
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
      <PhotoUrls urls={data.photoUrls} updateDataUrls={updateDataUrls} />
      <hr></hr>
      <p>Tags</p>
      <Tags tags={data.tags} updateDataTags={updateDataTags} />

      <hr></hr>
      <button type="submit">Submit</button>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <button>Intoarcete la lista</button>
      </Link>
    </form>
  );
}

export default Formular;

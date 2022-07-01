import React, { useState, useEffect, useCallback } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import PhotoUrls from "../FormsComponents/PhotoUrls";
import Tags from "../FormsComponents/Tags";

import Axios from "axios";

import "./FormularEditare.css"

function FormularEditare(props) {
  const url = "https://petstore.swagger.io/v2/pet";

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState(props.oldData);
  console.log(props.oldData);

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

  function handleStatus(e) {
    const newData = { ...data };
    newData["status"] = e.target.value;
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

  console.log(url + "/" + props.oldId);

  const navigate = useNavigate();
  const navigateToListare = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  function submit(e) {
    console.log(data);
    e.preventDefault();

    Axios.delete(url + "/" + props.oldId);
    Axios.put(url, {
      id: data.id,
      category: data.category,
      name: data.name,
      photoUrls: data.photoUrls,
      tags: data.tags,
      status: data.status,
    })
      .then((res) => {
        console.log(res.data);
        setShowMessage(true);
        setMessage(
          "Pet modificat cu succes!!!"
        );
        setTimeout(navigateToListare, 1000);
      })
      .catch(function (error) {
        console.log(error.message);
        setShowMessage(true);
        setMessage("A aparut o eroare: " + error.message);
      });
  }
  

  return (
    <form onSubmit={(e) => submit(e)} className="center">
      {showMessage && <p2>{message}</p2>}
      <div className="pet-info">
        <div style={{ float: "left", marginRight: "1%" }}>
          <label for="id">ID</label>
          <input
            onChange={(e) => handle(e)}
            id="id"
            value={data.id}
            placeholder="id"
            type="number"
            required
          ></input>
        </div>
        <div style={{ float: "left", marginRight: "1%" }}>
          <label for="name">NAME</label>
          <input
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
            placeholder="name"
            type="text"
            required
          ></input>
        </div>
        <div>
          <label for="status">STATUS</label>
          <select onChange={(e) => handleStatus(e)} name="status" id="status">
            <option value="availabe">availabe</option>
            <option value="pending">pending</option>
            <option value="sold">sold</option>
          </select>
        </div>
        <hr></hr>
        <p>category</p>
        <div style={{ float: "left", marginRight: "1%" }}>
          <label for="id">ID</label>
          <input
            onChange={(e) => handleCategory(e)}
            id="id"
            value={data.category.id}
            placeholder="id"
            type="number"
          ></input>
        </div>
        <div>
          <label for="name">NAME</label>
          <input
            onChange={(e) => handleCategory(e)}
            id="name"
            value={data.category.name}
            placeholder="name"
            type="text"
          ></input>
        </div>
        <hr></hr>
        <PhotoUrls urls={data.photoUrls} updateDataUrls={updateDataUrls} />
        <hr></hr>
        <p>Tags</p>
        <Tags tags={data.tags} updateDataTags={updateDataTags} />

        <hr></hr>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <button className="btn btn-warning" style={{float: "right"}}>Intoarcete la lista</button>
      </Link>
    </form>
  );
}

export default FormularEditare;

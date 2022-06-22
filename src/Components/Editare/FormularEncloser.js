import React, { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";

import FormularEditare from "./FormularEditare"

import Axios from "axios";

function FormularEncloser(props) {
  const url = "https://petstore.swagger.io/v2/pet";
console.log(props.oldId);
  const [loading, setLoading] = useState(true);
  
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

  const fetchPet = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      "https://petstore.swagger.io/v2/pet/" + props.oldId
    );
    const oldData = await response.json();
    setData(oldData);
    setLoading(false);
    console.log(oldData);
  }, []);

  useEffect(() => {
    fetchPet();
  }, [fetchPet]);

  return (
    <div>
    {(loading) && <h2>Loading...</h2>}
    {(!loading) && <FormularEditare oldId = {props.oldId} oldData = {data} />}
    </div>
  );
}

export default FormularEncloser;

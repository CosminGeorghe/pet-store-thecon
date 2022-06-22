import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import Pet from "./Pet";

const PetContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [petData, setPetData] = useState();

  const fetchPet = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      "https://petstore.swagger.io/v2/pet/" + props.index
    );
    const data = await response.json();
    setPetData(data);
    setLoading(false);
    console.log(data.id);
  }, []);

  useEffect(() => {
    fetchPet();
  }, [fetchPet]);

  return (
    <div>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <button>Intoarcete la lista</button>
      </Link>
      {loading && <h2>Loading...</h2>}
      {!loading && setPetData === undefined && (
        <h2>A aparut o eroare, revino la pagine precedenta</h2>
      )}
      {!loading && setPetData !== undefined && <Pet data={petData} />}
    </div>
  );
};

export default PetContainer;

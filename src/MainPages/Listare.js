import React, { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";

import Table from "../Components/Listare/Table";

import "./Center.css";

function Listare() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const petsNumber = 1000;
  const petsStartNumber = 1000;

  const fetchPetsHandler = useCallback(() => {
    setLoading(true);
    let fetchedPets = [];
    for (let id = 1; id <= 1000; id++) {
      fetch("https://petstore.swagger.io/v2/pet/" + id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.code !== 1) {
            const pet = [
              {
                index: data.id,
                name: data.name,
                status: data.status,
                key: data.id,
              },
            ];
            fetchedPets.push(pet);
          }
          if (id >= petsNumber) {
            console.log("happenes");
            setLoading(false);
            setPets(fetchedPets);
          }
        });
    }
  }, []);

  let content;
  if (loading) content = <h2>Loading...</h2>;
  else
    content = (
      <div>
        <button onClick={fetchPetsHandler} style={{ float: "right" }} className="btn btn-secondary">
          Refresh
        </button>
        <Link
          to={"/adaugare"}
          style={{ textDecoration: "none", float: "right" }}
        >
          <button className="btn btn-primary">Adauga</button>
        </Link>
        <Table className="center" pets={pets} refresh={fetchPetsHandler} />
      </div>
    );

  useEffect(() => {
    fetchPetsHandler();
  }, [fetchPetsHandler]);

  return <div className="center">{content}</div>;
}

export default Listare;

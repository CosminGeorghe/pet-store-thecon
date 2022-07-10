import React, { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";

import Table from "../Components/Listare/Table";

import "./Center.css";

function Listare() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPetsHandler = useCallback(() => {
    setLoading(true);
    let fetchedPets = [];

    fetch(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=available,pending,sold"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.map((pet) => {
          if (pet.id < 9222968140491042000) {
            console.log(pet.id);
            fetchedPets.push(pet);
          }
        });
        setLoading(false);
        setPets(fetchedPets);
      });
  }, []);

  let content;
  if (loading) content = <h2>Loading...</h2>;
  else
    content = (
      <div>
        <button
          onClick={fetchPetsHandler}
          style={{ float: "right" }}
          className="btn btn-secondary"
        >
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

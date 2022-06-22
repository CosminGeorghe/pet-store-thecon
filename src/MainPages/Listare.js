import React, { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";

import Table from "../Components/Listare/Table";

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
  else content = <Table pets={pets} />;

  useEffect(() => {
    fetchPetsHandler();
  }, [fetchPetsHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchPetsHandler}>Refresh</button>
        <Link to={"/adaugare"} style={{ textDecoration: "none" }}>
          <button>Adauga</button>
        </Link>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default Listare;

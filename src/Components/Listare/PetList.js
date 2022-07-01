import React from "react";

import Pet from "./Pet";

const PetsList = (props) => {
  if (props.pets.length === 0) return <h2>Nu am gasit animale</h2>;

  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th>Index</th>
          <th>Nume</th>
          <th>Status</th>
          <th>Actiuni</th>
        </tr>
      </thead>
      <tbody>
        {props.pets.map((pet) => (
          <Pet
            index={pet[0].index}
            name={pet[0].name}
            status={pet[0].status}
            refresh={props.refresh}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PetsList;

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
        {props.pets.map((pet, index) => (
          <Pet
            key={index+1}
            index={index+1}
            pet={pet}
            refresh={props.refresh}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PetsList;

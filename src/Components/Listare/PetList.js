import React from "react";

import Pet from "./Pet";

const PetsList = (props) => {
  if (props.pets.length === 0) return <h2>Nu am gasit animale</h2>;

  return (
    <table>
      <tr>
        <th>Index</th>
        <th>Nume</th>
        <th>Status</th>
        <th>Actiuni</th>
      </tr>
      <tbody>
        {props.pets.map((pet) => (
          <Pet index={pet[0].index} name={pet[0].name} status={pet[0].status} />
        ))}
      </tbody>
    </table>
  );
};

export default PetsList;

import React, { useState } from "react";

import Pet from "./Pet";
import Filtrare from "./Filtrare";

const PetsList = (props) => {
  const [filteredPets, setFilteredPets] = useState(props.pets);
  const changeStatus = (status) => {
    let temporaryPets = [];
    if (status === "all") {
      temporaryPets = props.pets;
    } else {
      props.pets.map((pet) => {
        if (
          typeof pet[0].status === "string" ||
          pet[0].status instanceof String
        )
          if (status.toLowerCase() === pet[0].status.toLowerCase())
            temporaryPets.push(pet);
      });
    }
    console.log(temporaryPets);
    setFilteredPets(temporaryPets);
    console.log(filteredPets);
  };

  const petsComponent = () => {
    console.log("da");
    if (filteredPets.lengt > 0) {
      return filteredPets.map((pet) => (
        <Pet index={pet[0].index} name={pet[0].name} status={pet[0].status} />
      ));
    }
    return <tr>Nici un pet gasit</tr>;
  };
  const da = () => {return <h2>da</h2>};

  return (
    <div>
      <table>
        <Filtrare changeStatus={changeStatus}></Filtrare>
        <tr>
          <th>Index</th>
          <th>Nume</th>
          <th>Status</th>
          <th>Actiuni</th>
        </tr>
        {da}
        {filteredPets.map((pet) => (
          <Pet index={pet[0].index} name={pet[0].name} status={pet[0].status} />
        ))}
      </table>
    </div>
  );
};

export default PetsList;

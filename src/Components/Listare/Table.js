import React, { useState } from "react";

import PetList from "./PetList";
import Filtrare from "./Filtrare";

const Table = (props) => {
  const [filteredPets, setFilteredPets] = useState(props.pets);
  const changeStatus = (status) => {
    let temporaryPets = [];
    if (status === "all") {
      temporaryPets = props.pets;
    } else {
      props.pets.map(
        (pet) =>
          (typeof pet[0].status === "string" ||
            pet[0].status instanceof String) &&
          status.toLowerCase() === pet[0].status.toLowerCase() &&
          temporaryPets.push(pet)
      );
    }
    setFilteredPets(temporaryPets);
  };

 console.log(filteredPets);
  return (
    <div>
      <Filtrare changeStatus={changeStatus}></Filtrare>

      <PetList pets={filteredPets} />
    </div>
  );
};

export default Table;

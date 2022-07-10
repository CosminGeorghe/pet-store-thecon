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
          (typeof pet.status === "string" ||
            pet.status instanceof String) &&
          status.toLowerCase() === pet.status.toLowerCase() &&
          temporaryPets.push(pet)
      );
    }
    setFilteredPets(temporaryPets);
  };

 console.log(filteredPets);
  return (
    <div>
      <Filtrare changeStatus={changeStatus}></Filtrare>

      <PetList pets={filteredPets} refresh={props.refresh}/>
    </div>
  );
};

export default Table;

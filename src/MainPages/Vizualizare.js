import React from "react";

import { useLocation } from 'react-router-dom';

import PetContainer from "../Components/Vizualizare/PetContainer";

function Vizualizare() {
  const location = useLocation();
 
  const strs = location.pathname.split('/');
  const id = strs.at(-1);


  return (
    <div>
      <h2>Aici poti vizualiza toate informatiile despre animalul selectat</h2>
      <PetContainer index = {id} />
    </div>
  );
}

export default Vizualizare;

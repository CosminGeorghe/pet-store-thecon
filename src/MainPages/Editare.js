import React from "react";

import FormularEncloser from "../Components/Editare/FormularEncloser";

import { useLocation } from 'react-router-dom';

function Editare() {
  const location = useLocation();

  const strs = location.pathname.split('/');
  const id = strs.at(-1);
  
  console.log(id);
  return (
    <FormularEncloser oldId = {id}/>
  );
}

export default Editare;

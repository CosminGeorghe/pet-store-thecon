import React, { useState } from "react";

const Filtrare = (props) => {

  const dropdownChangeHandler = (event) => {
    props.changeStatus(event.target.value);
  };
  return (

    <div>
      <p>Filtreaza status dupa :</p>
      <select name="status" id="status" onChange={dropdownChangeHandler}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="pending">Pending</option>
        <option value="sold">Sold</option>
      </select>
      <button>aplica</button>
    </div>
  );
};

export default Filtrare;

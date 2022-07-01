import React from "react";

const Filtrare = (props) => {

  const dropdownChangeHandler = (event) => {
    props.changeStatus(event.target.value);
  };
  return (

    <div>
      <p style={{float: "left", margin: "4px"}}>Filtreaza status dupa :</p>
      <select name="status" id="status" onChange={dropdownChangeHandler} style={{float: "left", margin: "4px"}}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="pending">Pending</option>
        <option value="sold">Sold</option>
      </select>
    </div>
  );
};

export default Filtrare;

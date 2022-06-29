import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Pet = (props) => {
  const url = "https://petstore.swagger.io/v2/pet/" + props.index;
  function stergerePet() {
    console.log("happened");
    Axios.delete(url);
    props.refresh();
  }
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.name}</td>
      <td>{props.status}</td>
      <td>
        <Link
          to={"/vizualizare/" + props.index}
          style={{ textDecoration: "none" }}
        >
          <button>Vizualizeaza</button>
        </Link>
        <Link to={"/editare/" + props.index} style={{ textDecoration: "none" }}>
          <button>Editaeaza</button>
        </Link>
        <button onClick={stergerePet}>Sterge</button>
      </td>
    </tr>
  );
};

export default Pet;

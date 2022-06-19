import React from "react";
import { Link } from "react-router-dom";

const Pet = (props) => {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.name}</td>
      <td>{props.status}</td>
      <td>
      <Link to={"/vizualizare"} style={{ textDecoration: 'none' }}>
      <button>Vizualizeaza</button>
      </Link>
      <Link to={"/editare"} style={{ textDecoration: 'none' }}>
      <button>Editaeaza</button>
      </Link>
      <Link to={"/sterge"} style={{ textDecoration: 'none' }}>
      <button>Sterge</button>
      </Link>
      </td>
    </tr>
    
  );
};

export default Pet;

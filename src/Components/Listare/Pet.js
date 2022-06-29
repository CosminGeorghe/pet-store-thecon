import React, {useState} from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal"
import Axios from "axios";

const Pet = (props) => {

  const [modalIsOpen,setmodalIsOpen] = useState(false);

  const url = "https://petstore.swagger.io/v2/pet/" + props.index;


  function stergerePet() {
    console.log("happened");
    Axios.delete(url);
    setTimeout(props.refresh, 200);
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
        <button onClick={() => setmodalIsOpen(true)}>Sterge</button>
        <Modal isOpen={modalIsOpen}>
          <h2>Atentie!!!</h2>
          <p>Petul va fi sters pentru totdeauna<br></br>Doresti sa continui?</p>
          <button onClick={stergerePet}>Da</button>
          <button onClick={() => setmodalIsOpen(false)}>Nu</button>
        </Modal>
      </td>
    </tr>
  );
};

export default Pet;

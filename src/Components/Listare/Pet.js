import React, {useState} from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal"
import Axios from "axios";
import "./Modal.css";

const Pet = (props) => {

  const [modalIsOpen,setmodalIsOpen] = useState(false);

  const url = "https://petstore.swagger.io/v2/pet/" + props.pet.id;


  function stergerePet() {
    console.log("happened");
    Axios.delete(url);
    setTimeout(props.refresh, 200);
  }

  
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.pet.name}</td>
      <td>{props.pet.status}</td>
      <td>
        <Link
          to={"/vizualizare/" + props.pet.id}
          style={{ textDecoration: "none" }}
        >
          <button className="btn btn-success">Vizualizeaza</button>
        </Link>
        <Link to={"/editare/" + props.pet.index} style={{ textDecoration: "none" }}>
          <button className="btn btn-warning">Editaeaza</button>
        </Link>
        <button onClick={() => setmodalIsOpen(true)} className="btn btn-danger">Sterge</button>
        <Modal isOpen={modalIsOpen}>
          <h2>Atentie!!!</h2>
          <p>Petul va fi sters pentru totdeauna<br></br>Doresti sa continui?</p>
          <button onClick={stergerePet} className="btn btn-danger">Da</button>
          <button onClick={() => setmodalIsOpen(false)} className="btn btn-secondary">Nu</button>
        </Modal>
      </td>
    </tr>
  );
};

export default Pet;

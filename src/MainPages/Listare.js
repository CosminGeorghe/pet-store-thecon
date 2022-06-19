import React, { useState, useEffect} from "react";

import PetsList from "../Components/Listare/PetList";

function Listare() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const petsNumber = 1000;

  function fetchPetsHandler() {
    if(!loading) setLoading(true);
    let fetchedPets = [];
    for (let id = 3; id <= petsNumber; id++) {
      fetch("https://petstore.swagger.io/v2/pet/" + id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.code !== 1) {
            const pet = [
              {
                index: data.id,
                name: data.name,
                status: data.status,
                key: data.id,
              },
            ];
            fetchedPets.push(pet);
          }
          if (id === petsNumber) {setLoading(false);setPets(fetchedPets); }
        });
    }
  }

  let content;
  if(loading) content=<h2>Loading...</h2>;
  else content = <PetsList pets={pets} />;

  useEffect(()=>{
    fetchPetsHandler();
}, []) 
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchPetsHandler}>Refresh</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default Listare;

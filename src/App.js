import React from "react";

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Adaugare from "./MainPages/Adaugare"
import Listare from "./MainPages/Listare";
import Vizualizare from "./MainPages/Vizualizare";
import Editare from "./MainPages/Editare";

function App() {
  return (
    <Router>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
      <div>
        <Routes>
          <Route path="" element={<Listare />} />
          <Route path="/adaugare/*" element={<Adaugare />} />
          <Route path="/vizualizare/*" element={<Vizualizare />} />
          <Route path="/editare/*" element={<Editare />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

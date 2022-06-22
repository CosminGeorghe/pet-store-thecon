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

import React from "react";

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Listare from "./MainPages/Listare";
import Vizualizare from "./MainPages/Vizualizare";
import Editare from "./MainPages/Editare";
import Stergere from "./MainPages/Stergere";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Listare />} />
          <Route path="/vizualizare" element={<Vizualizare />} />
          <Route path="/editare" element={<Editare />} />
          <Route path="/sterge" element={<Stergere />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

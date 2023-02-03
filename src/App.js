import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import Events from "./Events";
import Projects from "./Projects";
import Goals from "./Goals";
import Contact from "./Contact";
import Collaborations from "./Collaborations";
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collaborations" element={<Collaborations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

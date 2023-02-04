import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Goals from "./pages/Goals";
import Contact from "./pages/Contact";
import Collaborations from "./pages/Collaborations";

function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collaborations" element={<Collaborations />} />
      </Routes>
  );
}

export default App;

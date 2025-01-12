import React from "react";
import "./index.css";

import Navbar from "../src/assets/Components/Navbar/Navbar.jsx";
import Home from "../src/assets/pages/Home/Home.jsx";
import Skills from "./assets/pages/Skills/Skills.jsx";
import Projects from "../src/assets/pages/Projects/Projects.jsx";
import Achivements from "../src/assets/pages/Achivements/Acheivements.jsx";
import Contact from "../src/assets/pages/Contact/Contact.jsx";
import Footer from "./assets/Components/Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achivements" element={<Achivements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

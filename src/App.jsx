// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Features from "./components/features";
import Home from "./Pages/home";
import ContactUs from "./Pages/contacts"; // Import the ContactUs component

import "./index.css";
import { HeroRight } from "./components";
import FAQ from "./components/FAQ's";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        {/* <HeroRight /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
        </Routes>
        <Features />
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

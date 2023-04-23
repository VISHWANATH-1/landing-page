import React from "react";
import Image from './download.webp'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
const Navbar = () => {
  return (
    <>
      <Router>
        <ul className="link-items" >
          <img className="image" src={Image} alt="" />
          <li>
            <Link style={{textDecoration:'none',color:'whitesmoke'}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{textDecoration:'none',color:'whitesmoke'}} to="/about">About</Link>
          </li>
          <li>
            <Link style={{textDecoration:'none',color:'whitesmoke'}} to="/contact">Contact</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    This is my portfolio page.
    <div>
      <Link to="/portfolio/one">project one</Link>
      <Link to="/portfolio/two">project two</Link>
    </div>
  </div>
);

export default Portfolio;

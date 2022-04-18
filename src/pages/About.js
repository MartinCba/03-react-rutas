import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>Acerca</h2>
      <p>Acerca de...importado desde pages</p>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default About;

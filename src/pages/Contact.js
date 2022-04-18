import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <h3>nuevo contacto!</h3>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Contact;

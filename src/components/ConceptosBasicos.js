import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import ReactTopics from "../pages/ReactTopics";
import User from "../pages/User";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <MenuConceptos />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="acerca" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="user/:username" element={<User />} />
        <Route path="products" element={<Products />} />
        <Route path="react/*" element={<ReactTopics />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default ConceptosBasicos;

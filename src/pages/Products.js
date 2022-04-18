import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  //let location = useLocation();
  //console.log(location);
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 20;

  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;

  //console.log(start, end);
  let navigate = useNavigate();

  const handlePrev = (e) => {
    navigate({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };
  const handleNext = (e) => {
    navigate({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Products;

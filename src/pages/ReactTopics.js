import React from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>{topic}</h4>
      <p>
        lorem ipsum informacion del topic tehjkkck wninciqni niciqn niciqnicnq
        cqninceinci ninceiqnqc ninqincineqc ninqincineqc
      </p>
    </div>
  );
};

const ReactTopics = () => {
  return (
    <div>
      <h3>React</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
          <Outlet />
        </li>
        <li>
          <Link to="props">Props</Link>
          <Outlet />
        </li>
        <li>
          <Link to="state">State</Link>
          <Outlet />
        </li>
        <li>
          <Link to="components">Components</Link>
          <Outlet />
        </li>
      </ul>
      <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </div>
  );
};

export default ReactTopics;

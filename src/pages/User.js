import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  //   let params = useParams();
  //   console.log(params);
  let { username } = useParams();
  return (
    <div>
      <h3>Perfil del usuario</h3>
      <p>
        El nombre del usuario es: <b>{username}</b>
      </p>
    </div>
  );
};

export default User;

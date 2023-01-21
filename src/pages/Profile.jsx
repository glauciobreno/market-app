import React from "react";
import { getItem } from "../services/LocalStoreFuncs";

export const Profile = (props) => {
  const usuario = getItem("usuario");

  const toProfileEdit = () => {
    const {
      history: { push },
    } = props;
    push("/profile/edit");
  };
  return (
    <div>
      <p>{usuario.name}</p>
      <button onClick={toProfileEdit}>Editar Perfil</button>
    </div>
  );
};

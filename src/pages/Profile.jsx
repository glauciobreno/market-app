import React from "react";
import { getItem } from "../services/LocalStoreFuncs";

export const Profile = () => {
  const { name } = getItem("usuario");
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

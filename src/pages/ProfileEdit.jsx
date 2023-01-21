import React from "react";

export const ProfileEdit = () => {
  return (
    <div>
      <p>Name</p>
      <input type="text" />
      <p>CPF</p>
      <input type="number" />

      <p>Email</p>
      <input type="email" />
      <p>Senha</p>
      <input type="password" />
    </div>
  );
};

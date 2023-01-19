import React, { useState } from "react";
import { setItem } from "../services/LocalStoreFuncs";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const cond = name.length > 3 && password.length > 5;

  const saveUser = (name, password) => {
    setItem("usuario", { name, password });
    const {
      history: { push },
    } = props;
    push("/store");
  };
  return (
    <div>
      <p>Nome</p>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
        value={name}
      />
      <p>Senha</p>
      <input
        type="password"
        onChange={({ target: { value } }) => setPassword(value)}
        value={password}
      />
      <br />
      <button
        type="button"
        onClick={() => saveUser(name, password)}
        disabled={!cond}
      >
        Sign in
      </button>
    </div>
  );
};

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <section className="selogin">
        <h1 className="h1login">Proyecto de 3W</h1>

        <h2 className="h2login">Pagina de gestion de eventos</h2>

        <button className="loginbuton" onClick={() => loginWithRedirect()}>
          iniciar sesion
        </button>
      </section>
    </div>
  );
};

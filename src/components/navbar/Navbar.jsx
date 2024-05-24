import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css"

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className="naeventos">
        {" "}
        <Link className="linaeventos" to="/crearevento"><button className="loginbuton bonaeventos">Crear evento</button></Link>
        <Link className="linaeventos" to="/verevento"><button className="loginbuton bonaeventos">Eventos creados</button></Link>
        <Link className="linaeventos" to="/buscarevento"><button className="loginbuton bonaeventos">Buscar eventos</button></Link>
      </div>
    )
  );
};

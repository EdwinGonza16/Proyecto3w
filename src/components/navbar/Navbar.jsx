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
        <Link className="linaeventos" to="/crearevento"><button className="loginbuton bonaeventos">Ir a crear un evento</button></Link>
        <Link className="linaeventos" to="/verevento"><button className="loginbuton bonaeventos">Ver los eventos creados</button></Link>
      </div>
    )
  );
};

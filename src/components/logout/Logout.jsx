import { useAuth0 } from "@auth0/auth0-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./logout.css";

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="loginbuton"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <i className="fa-solid fa-right-from-bracket"></i>
      <span>Cerrar sesion</span>
    </button>
  );
};

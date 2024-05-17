import { Login } from "./components/login/Login";
import { Logout } from "./components/logout/Logout";
import { Profile } from "./components/profile/Profile";
import { Eventos } from "./components/eventos/Eventos";
import { useAuth0 } from "@auth0/auth0-react";

import "./app.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="contentapp">
      <div className="app">
        <Profile />
        {isAuthenticated ? <Logout /> : <Login />}
        <Eventos />
      </div>
    </div>
  );
}

export default App;

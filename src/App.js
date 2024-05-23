import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Profile } from "./components/profile/Profile";
import { Eventos } from "./components/eventos/Eventos";
import { CrearEvento } from "./components/crearEvento/CrearEvento";
import { useAuth0 } from "@auth0/auth0-react";

import "./app.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="contentapp">
      <div className="app">
        <Routes>
          <Route path="/" element= {isAuthenticated ? <Profile /> : <></>}/>
          <Route path="/crearevento" element={<CrearEvento />} />
          <Route path="/verevento" element={<Eventos />} />
        </Routes>
        {!isAuthenticated ? <Login /> : <></>}
        {!isAuthenticated ? <Eventos /> : <></>}
      </div>
    </div>
  );
}

export default App;

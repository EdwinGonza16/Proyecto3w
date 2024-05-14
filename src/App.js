import { Login } from "./components/login/Login";
import { Logout } from "./components/logout/Logout";
import { Profile } from "./components/profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? <Logout /> : <Login />}
      <Profile />
    </div>
  );
}

export default App;

import { Logout } from "../logout/Logout";
import { Navbar } from "../navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import "./profile.css";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <div className="profile">
          <img className="userimg" src={user.picture} alt={user.name} />
          <h2 className="username">{user.name}</h2>
          <p className="useremail">{user.email}</p>
        </div>
        {isAuthenticated ? <Logout /> : <></>}
        <Navbar />
      </>
    )
  );
};

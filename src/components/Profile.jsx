import React, { useContext } from "react";
import UserContext from "../context/UseContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please Login!!</h2>;
  return <h2>Welcome {user.name}</h2>;

  return;
};

export default Profile;

import React, { useContext, useState } from "react";
import UserContext from "../context/UseContext";

const User = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const submitform = (e) => {
    e.preventDefault();
    setUser({ name, password});
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter name"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitform}>Submit</button>
    </div>
  );
};

export default User;

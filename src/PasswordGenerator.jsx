import React from "react";

const PasswordGenerator = () => {
  return (
    <div>
      <h2>Password Generator</h2>
      <input type="text" readOnly value="password" />
      <label htmlFor="">{length}</label>
      <button></button>
    </div>
  );
};

export default PasswordGenerator;

import React, { useState } from "react";

const Register = () => {
  const [shownBtn, setShowBtn] = useState(false);
  return (
    <div>
      {shownBtn ? (
        <button>showbtn is true</button>
      ) : (
        <button>showbtn is false</button>
      )}
      <button onClick={() => setShowBtn(!shownBtn)}>Toogle Button</button>
    </div>
  );
};

export default Register;

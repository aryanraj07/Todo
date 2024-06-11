import React, { useCallback, useEffect, useRef, useState } from "react";

const PassGen = () => {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passRef = useRef();
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*()-_+={[}]|?/>.,<";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);
  const handleCopy = () => {
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  };
  return (
    <div>
      <div>
        <h1>Password Generator</h1>
        <div className="flex flex-col gap-6 mx-auto">
          <div className="min-w-80 flex gap-5">
            <input
              type="text"
              value={password}
              readOnly
              className="w-1/3"
              ref={passRef}
            />
            <button onClick={handleCopy}>Copy</button>
          </div>
          <div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              id="len"
            />
            <label htmlFor="len">Length:{length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.value)}
              id="num"
            />
            <label htmlFor="num">Number Allowed</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={charAllowed}
              onChange={(e) => setCharAllowed(e.target.value)}
              id="char"
            />
            <label htmlFor="char">Char Allowed</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassGen;

import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGen = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSSTUVWXYZabcdefghikjklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+-=[]{}|?.:'";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 2);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div>
      <div className="h-screen w-full max-w-md  mx-auto shadow-md bg-gray-800 text-orange-700 px-3 py-3 rounded-lg dark:bg-gray-950 dark:text-white">
        <h2 className="text-white text-center font-semibold">
          Password Generator
        </h2>
        <div className="flex shrink-0 justify-center">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            placeholder="passowrd"
            className="outline-none py-1 px-3"
          />
          <button
            onClick={copyToClipboard}
            className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
          >
            copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input
              type="checkbox"
              value={numberAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers ALlowed</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input
              type="checkbox"
              value={charAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Charachters ALlowed</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGen;

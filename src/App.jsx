import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import Todo from "./components/Todo";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
function App() {
  return (
    <>
      <PWAInstallPrompt />
      <Todo />
    </>
  );
}

export default App;

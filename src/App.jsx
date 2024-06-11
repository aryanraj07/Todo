import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Count from "./components/Count";
import Todo from "./components/Todo";
import Register from "./components/Register";
import PasswordGen from "./components/PasswordGen";
import { Outlet } from "react-router-dom";
import useTheme, { ThemeContextProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Todo />
    </ThemeContextProvider>
  );
}

export default App;

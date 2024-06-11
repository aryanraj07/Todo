import "../App.css";
import { NavLink } from "react-router-dom";

import useTheme from "../context/theme";

const Navbar = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const themeToggler = () => {
    themeMode && themeMode === "dark" ? lightTheme() : darkTheme();
  };
  return (
    <div>
      {" "}
      <nav>
        <ul>
          <NavLink
            to={""}
            className={({ isActive }) => {
              `${isActive ? "bg-orange-600" : "bg-gray-700"}`;
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "text-gray-700"}`
            }
          >
            <li>Todo</li>
          </NavLink>
          <NavLink
            to="/passwordgen"
            className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "text-gray-700"}`
            }
          >
            <li>PasswordGen</li>
          </NavLink>
          <NavLink
            to="/passgen"
            className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "text-gray-700"}`
            }
          >
            <li>PassGen</li>
          </NavLink>
          <li>
            <button onClick={themeToggler}>{themeMode}</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

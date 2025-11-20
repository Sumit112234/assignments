import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ logoText, activePath }) => {
  const favoritesCount = useSelector(
    (state) => state.favorites.favorites.length
  );

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeClasses = "bg-blue-600 text-white";
  const inactiveClasses = "text-gray-700 hover:bg-blue-100";

  const isActive = (path) =>
    activePath === path || (path !== "/" && activePath.startsWith(path));

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">{logoText}</span>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={`${linkBase} ${
              isActive("/") ? activeClasses : inactiveClasses
            }`}
          >
            Home
          </Link>
          <Link
            to="/students"
            className={`${linkBase} ${
              isActive("/students") ? activeClasses : inactiveClasses
            }`}
          >
            Students
          </Link>
          <Link
            to="/favorites"
            className={`${linkBase} ${
              isActive("/favorites") ? activeClasses : inactiveClasses
            }`}
          >
            Favorites
            <span className="ml-1 inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-xs w-5 h-5">
              {favoritesCount}
            </span>
          </Link>
          <Link
            to="/about"
            className={`${linkBase} ${
              isActive("/about") ? activeClasses : inactiveClasses
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

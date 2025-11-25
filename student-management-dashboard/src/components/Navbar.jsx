import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ logoText, activePath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const favoritesCount = useSelector(
    (state) => state.favorites.favorites.length
  );

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeClasses = "bg-blue-600 text-white";
  const inactiveClasses = "text-gray-700 hover:bg-blue-100";

  const isActive = (path) =>
    activePath === path || (path !== "/" && activePath.startsWith(path));

  const NavLinks = ({ onClick }) => (
    <>
      <Link
        to="/"
        onClick={onClick}
        className={`${linkBase} ${
          isActive("/") ? activeClasses : inactiveClasses
        }`}
      >
        Home
      </Link>
      <Link
        to="/students"
        onClick={onClick}
        className={`${linkBase} ${
          isActive("/students") ? activeClasses : inactiveClasses
        }`}
      >
        Students
      </Link>
      <Link
        to="/favorites"
        onClick={onClick}
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
        onClick={onClick}
        className={`${linkBase} ${
          isActive("/about") ? activeClasses : inactiveClasses
        }`}
      >
        About
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold text-blue-600">{logoText}</span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          <NavLinks />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-blue-100 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon */}
          <svg
            className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-2 flex flex-col gap-1">
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

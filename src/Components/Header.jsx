import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-[100%] h-fit bg-amber-50 text-black flex flex-row justify-between items-center">
      <div id="part-1">
        <h1>Navbar</h1>
      </div>
      <div id="part-2">
        <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">
          Home
        </Link>
        <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">
          About
        </Link>
        <Link to="/gallery" className="hover:bg-gray-700 px-3 py-2 rounded">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Header;

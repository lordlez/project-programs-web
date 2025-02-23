"use client";

import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Inicio
          </Link>
          <Link to="/contacto" className="hover:text-gray-300">
            Contacto
          </Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-2 py-1 rounded-l-md text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 px-3 py-1 rounded-r-md hover:bg-blue-600">
            <SearchIcon size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

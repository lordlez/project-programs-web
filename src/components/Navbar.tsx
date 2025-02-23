"use client";

import type React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

interface NavbarProps {
  onSearch: (term: string) => void;
  onResetSearch: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, onResetSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    navigate("/");
  };

  const handleHomeClick = () => {
    onResetSearch();
    setSearchTerm("");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-orange-500 bg-opacity-80 backdrop-blur-sm text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="text-lg font-medium hover:text-orange-200 transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            to="/contacto"
            className="text-lg font-medium hover:text-orange-200 transition-colors duration-200"
          >
            Contacto
          </Link>
        </div>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 pr-10 rounded-full text-gray-800 bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-white transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-2 mr-3 text-orange-500 hover:text-orange-700 transition-colors duration-200"
          >
            <Search size={20} />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

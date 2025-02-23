"use client";

import type React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProgramDetail from "./pages/ProgramDetail";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const resetSearch = () => {
    setSearchTerm("");
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onSearch={handleSearch} onResetSearch={resetSearch} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/program/:slug" element={<ProgramDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

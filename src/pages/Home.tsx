"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { programs } from "../data/programs";

interface HomeProps {
  searchTerm: string;
}

const Home: React.FC<HomeProps> = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const itemsPerPage = 9;

  useEffect(() => {
    if (searchTerm) {
      const filtered = programs.filter((program) =>
        program.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPrograms(filtered);
    } else {
      setFilteredPrograms(programs);
    }
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPrograms.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-3xl font-bold mb-4">Programas disponibles</h1>
      {filteredPrograms.length === 0 ? (
        <p>No se encontraron programas que coincidan con "{searchTerm}"</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentItems.map((program) => (
              <Link
                to={`/program/${program.slug}`}
                key={program.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={program.imageUrl || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 truncate">
                    {program.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;

import type React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { programs } from "../data/programs";

const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="container mx-auto mt-20 p-4">Programa no encontrado</div>
    );
  }

  const handleDownload = () => {
    window.open(program.downloadUrl, "_blank");
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <Link
        to="/"
        className="flex items-center text-blue-500 hover:underline mb-4"
      >
        <ArrowLeft className="mr-2" size={20} />
        Volver al inicio
      </Link>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={program.imageUrl || "/placeholder.svg"}
          alt={program.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{program.title}</h1>
          <p className="text-gray-700 mb-6">{program.description}</p>
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <Download className="mr-2" size={20} />
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;

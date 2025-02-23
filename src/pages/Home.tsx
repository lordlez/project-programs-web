import type React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-3xl font-bold mb-4">
        Bienvenido a la página de inicio
      </h1>
      <p>Esta es la página principal de nuestra aplicación.</p>
    </div>
  );
};

export default Home;

import React from "react";
import Image from "next/image";
const Start = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-4">
          ¡Pon a Prueba tu Sabiduría: JS Quiz!
        </h2>
        <div className="w-full h-48 mb-4 relative">
          <Image
            src="/imagen.jpg" // Agrega la ruta de tu imagen
            alt="Imagen"
            layout="fill"
            className="rounded-lg"
          />
        </div>

        <p className="text-gray-600 text-sm mb-4">
          "No importa si eres un novato o un experto, nuestro quiz está diseñado
          para todos. Sumérgete en el mundo del aprendizaje y la diversión
          mientras respondes preguntas estimulantes y educativas."
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Suscribete para recibir novedades
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 text-complement2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su correo"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Suscribirse
        </button>
      </div>
    </div>
  );
};

export default Start;

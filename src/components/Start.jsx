import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import autoprefixer from "autoprefixer";
const Start = () => {
  return (
    <motion.div
      className=" min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div className=" flex items-center justify-center pt-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto pt-4 pb-4 rounded-lg shadow-sm shadow-second ">
          <h2 className="text-5xl font-base font-black text-center mb-4  ">
            Pon a prueba tu
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-complement2">
              {" "}
              sabiduría
            </span>
          </h2>
          <div className=" mb-4  relative flex justify-center">
            <Image
              src="/img3.png" // Agrega la ruta de tu imagen
              alt="Imagen"
              height={200}
              width={350}
              className="rounded-lg opacity-95"
            />
          </div>
          <p className="text-complement text-pop text-xl mb-4 px-20">
            No importa si eres un novato o un experto, Este quiz está diseñado
            para todos. Sumérgete en el mundo del aprendizaje y la diversión
            mientras respondes preguntas estimulantes y educativas.
          </p>
          <div className="flex mb-2 justify-center ">
            <input
              type="email"
              className="w-1/3 px-6 py-1 border border-second  bg-transparent rounded-lg focus:outline-none focus:border-blue-500 "
              placeholder="Ingrese su correo"
            />
            <button className=" bg-complement2 text-white  px-4 py-2 ml-1 rounded-lg  hover:bg-new2 hover:bg-opacity-80 transition duration-300">
              Suscribirse
            </button>
          </div>
          <div className="text-sm text-center mb-4 ">
            *Recibe las ultimas actualizaciones antes de lanzamiento
          </div>
          <div className="flex justify-around ">
            <div className="text-center px-4 conteiner hover:bg-primary hover:text-new p-2 rounded-lg">
              <p className="text-2xl font-semibold mb-1 ">+10</p>
              <p className="text-sm text-gray-500">Quiz</p>
            </div>
            <div className="text-center px-2 hover:bg-primary hover:text-new p-2 rounded-lg">
              <p className="text-2xl font-semibold mb-1">5</p>
              <p className="text-sm text-gray-500">Ejercicios</p>
            </div>
            <div className="text-center px-4 hover:bg-primary hover:text-new p-2 rounded-lg">
              <p className="text-2xl font-semibold mb-1">+30</p>
              <p className="text-sm text-gray-500"></p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Start;

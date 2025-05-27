"use client";
import React from "react";

export type ProyectoCardProps = {
  nombre: string;
  descripcion: string;
  imagen: string; // nombre de la imagen en /public
  githubUrl: string;
};

const ProyectoCard: React.FC<ProyectoCardProps> = ({
  nombre,
  descripcion,
  imagen,
  githubUrl,
}) => {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0">

      	<img
  			src={`/${imagen}`}
  			alt={nombre}
  			className="w-full h-[180px] object-contain"
		/>


      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{nombre}</h3>
        <p className="text-sm text-gray-600 mb-3">{descripcion}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Ver en GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProyectoCard;

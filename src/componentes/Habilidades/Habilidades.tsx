"use client";
import React from 'react';

const habilidades = [
  "Liderazgo",
  "Comunicación asertiva",
  "Trabajo en equipo",
  "Espíritu comercial",
  "Creatividad",
];

const Habilidades = () => {
  return (
    <section className="Habilidades mt-[50px] px-[20px] mb-[20px]">
      <h4 className="text-[18px] font-bold text-gray-800 text-center mb-[20px]">
        Habilidades
      </h4>
      <ul className="space-y-3">
        {habilidades.map((habilidad, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700 text-[15px]">
            <span className="icon icon-skills"></span>
            {habilidad}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Habilidades;

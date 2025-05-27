"use client";
import React from "react";

export type LenguajeProps = {
  lenguaje: string;
  porcentaje: number;
};

const Lenguaje: React.FC<LenguajeProps> = ({ lenguaje, porcentaje }) => {
  return (
    <div className="Lenguaje px-[40px]">
      <div className="flex justify-between text-sm font-medium text-gray-800 mb-1">
        <span>{lenguaje}</span>
        <span>{porcentaje}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Lenguaje;

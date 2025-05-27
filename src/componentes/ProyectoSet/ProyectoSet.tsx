"use client";
import React from "react";
import ProyectoCard from "../ProyectoCard/ProyectoCard";

export type Proyecto = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  githubUrl: string;
};

export type ProyectoSetProps = {
  proyectos: Proyecto[];
};

const ProyectoSet: React.FC<ProyectoSetProps> = ({ proyectos }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 px-[17px] pb-4 w-max">
        {proyectos.map((p) => (
          <ProyectoCard
            key={p.id}
            nombre={p.nombre}
            descripcion={p.descripcion}
            imagen={p.imagen}
            githubUrl={p.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProyectoSet;

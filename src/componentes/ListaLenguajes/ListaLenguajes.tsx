import React from "react";
import Lenguaje from "../Lenguaje/Lenguaje";

const ListaLenguajes = () => {
  const lenguajes = [
    { lenguaje: "HTML", porcentaje: 90 },
    { lenguaje: "CSS", porcentaje: 90 },
    { lenguaje: "Js", porcentaje: 75 },
    { lenguaje: "PHP", porcentaje: 50 },
    { lenguaje: "Python", porcentaje: 75 },
  ];

  return (
    <div className="max-w-md mx-auto">
      {lenguajes.map((item, index) => (
        <Lenguaje
          key={index}
          lenguaje={item.lenguaje}
          porcentaje={item.porcentaje}
        />
      ))}
    </div>
  );
};

export default ListaLenguajes;

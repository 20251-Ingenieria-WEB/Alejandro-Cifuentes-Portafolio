import React from "react";
import Idioma from "../Idioma/Idioma";

const ListaIdiomas = () => {
  const idiomas = [
    { idioma: "Español", porcentaje: 100 },
    { idioma: "Inglés", porcentaje: 50 },
    { idioma: "Francés", porcentaje: 20 },
  ];

  return (
    <div className="max-w-md mx-auto">
      {idiomas.map((item, index) => (
        <Idioma
          key={index}
          idioma={item.idioma}
          porcentaje={item.porcentaje}
        />
      ))}
    </div>
  );
};

export default ListaIdiomas;

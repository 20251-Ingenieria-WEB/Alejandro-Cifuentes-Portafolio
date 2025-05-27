"use client";
import React, { useState } from 'react';
import Image from 'next/image';

{/*Este componente es el primer componente del contenido central*/}

export type HeroProps = {}

const Hero: React.FC<HeroProps> = ({}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="contenedor flex flex-col md:flex-row items-center py-[80px] px-[60px] bg-white">
        <div className="Informacion max-w-[600px] md:mr-[50px]">
          <h1 className="text-black text-[48px] font-bold leading-[1.2em] mb-[50px]">
            Soy Alejandro Cifuentes Estudiante de <span className="text-yellow-500">Ingeniería en Sistemas</span>
          </h1>
          <p className="mb-[50px]">
            Me defino como una persona con ganas de aprender, 
            proactivo y un gran líder en equipos de trabajo. 
            He trabajado en varias empresas enfocadas a la
            logística y planeación de eventos.
          </p>
          <button
  			onClick={() => setShowModal(true)}
  			className="text-black bg-yellow-500 px-6 py-3 rounded font-semibold cursor-pointer">
			CONTRÁTAME
		   </button>
        </div>
        <div className="imagen mt-[30px] md:mt-0">
          <Image
            src="/fotodos.png"
            alt="Hero Image"
            width={225}
            height={325}
            className="rounded-lg"
          />
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">¡Contáctame!</h3>
            <p className="text-gray-800 mb-2">📧 alejandro@email.com</p>
            <p className="text-gray-800 mb-4">📞 +57 300 123 4567</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-yellow-500 text-black font-semibold rounded cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;

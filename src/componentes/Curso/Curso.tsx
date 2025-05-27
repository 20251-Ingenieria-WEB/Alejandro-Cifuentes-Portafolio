"use client";
import React from 'react';

export type CursoProps = {
	universidad: string;
	periodo: string;
	titulo: string;
	descripcion: string;
}

const Curso: React.FC<CursoProps>  = ({universidad,periodo,titulo,descripcion}) => {
	return (
		<div className="card
					 bg-white shadow-[0_4px_20px_0_rgba(25,83,41,0.15)] 
					 flex py-[30px] px-[35px] 
					 items-center
					 justify-between">
 			<div className="izquierda text-center max-w-[270px]">
				<h4 className="text-black font-bold text-[18px]">{universidad}</h4>
				<p className="text-white bg-yellow-500 text-center text-[15px] mt-4">{periodo}</p>
			</div>
			<div className="derecha max-w-[400px]">
				<h4 className="text-black font-bold text-[18px]">{titulo}</h4>
				<p className="text-gray-600 text-[15px] mt-4">{descripcion}</p>
			</div>
 		</div>
	);
};

export default Curso;

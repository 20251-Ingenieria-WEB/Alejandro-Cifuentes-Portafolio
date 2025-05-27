"use client";
import React from 'react';

export type IdiomaProps = {
	idioma: string;
	porcentaje: number;
}

const Idioma: React.FC<IdiomaProps>  = ({ idioma, porcentaje}) => {
	return (
		<div className="idioma px-[40px]">

 			<div className="flex justify-between text-sm font-medium text-gray-800 mb-1">
        		<span>{idioma}</span>
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

export default Idioma;


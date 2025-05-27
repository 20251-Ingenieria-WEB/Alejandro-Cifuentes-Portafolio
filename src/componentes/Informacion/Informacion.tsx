"use client";
import React from 'react';

export type InformacionProps = {}

const Informacion: React.FC<InformacionProps>  = ({}) => {
	return (
		<div className="informacion flex-col space-y-[10px] px-[40px] py-[50]">

			<h4 className="text-center text-[18px] font-bold">Informacion</h4>

			<div className="edad flex justify-between">
				<p>
					Edad
				</p>
				<p> 
					25 años 
				</p>
			</div>

			<div className="direccion flex justify-between">
				<p>
					Dirección
				</p>
				<p>
					Carrera 69 #97-52
				</p>
			</div>

			<div className="ciudad flex justify-between">
				<p>
					Ciudad
				</p>
				<p>
					Medellin-Colombia
				</p>
			</div>

 		</div>
	);
};

export default Informacion;

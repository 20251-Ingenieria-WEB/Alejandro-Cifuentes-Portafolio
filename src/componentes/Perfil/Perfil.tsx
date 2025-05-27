"use client";
import React from 'react';
import Image from 'next/image';

export type PerfilProps = {}

const Perfil: React.FC<PerfilProps>  = ({}) => {
	return (
		<div className="perfil flex flex-col items-center px-[70px] py-[50px]">
			<div className="foto">
				<Image
					src="/fotodos.png"
					alt="foto miniatura"
					width={150} 
					height={150}
					className="rounded-full object-cover"
				/>
			</div>
 			<div className="informacion text-center">
				<h4 className="font-bold text-[18px] whitespace-nowrap">
					Alejandro Cifuentes
				</h4>
				<p>
					Estudiante Ingenieria de sistemas
				</p>
			</div>
 		</div>
	);
};

export default Perfil;

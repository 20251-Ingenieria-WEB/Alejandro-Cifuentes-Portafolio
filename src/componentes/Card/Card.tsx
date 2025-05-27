"use client";
import React from 'react';

{/*Estas card son las que use para la experiencia laboral*/}

export type CardProps = {
	name: string;
	description: string;
	imageUrl: string;
}

const Card: React.FC<CardProps>  = ({name, description, imageUrl}) => {
	return (
		<div className="card
					 bg-white shadow-[0_4px_20px_0_rgba(25,83,41,0.15)]  
					 items-center
					 justify-between
					 min-w-[300]">
			<div className="imagen mb-[30px] text-center py-[28px]">
				{/*lo intente hacer con el image pero no fui capaz*/}
				{/*<Image src={`./icons/${imageUrl}.svg`} alt={name} width={100} height={100}/>*/}
				<span className={`icon-${imageUrl} text-7xl`} aria-label={name}></span>
			</div>
			<div className="informacion px-[20px]">
				<h4 className="text-black font-bold text-center text-[18px] mb-[20px]">{name}</h4>
				<p className="text-gray-600 text-center text-[15px] mb-[20px]">{description}</p>
			</div>
			
			
 		</div>
	);
};

export default Card;

"use client";
import React from 'react';
import { Perfil } from '../Perfil';
import { Informacion } from '../Informacion';
import { ListaIdiomas } from '../ListaIdiomas';
import { ListaLenguajes } from '../ListaLenguajes';
import { Habilidades } from '../Habilidades';

{/*El menu izquierdo para su creacion lo que hice fue seccionarlo
	por componentes, crear todos los componentes y instanciarlos aca
	para crear el menu completo y posteriormente no llamar todos los componentes
	sino solo el componente del meni izquierdo*/}

export type MenuizquierdoProps = {}

const Menuizquierdo: React.FC<MenuizquierdoProps>  = ({}) => {
	return (
		<div className="menu izquierdo">

        	<Perfil/>
        	<div className="h-[1px] bg-gray-300 my-[20px]" />

        	<Informacion/>
        	<div className="h-[1px] bg-gray-300 my-[20px]" />

        	<section className="Idiomas">
          		<h4 className="text-[18px] font-bold text-gray-800 text-center mt-[30px] mb-[20px]">
					Idiomas
				</h4>
          		<ListaIdiomas/>
       		</section>
        	<div className="h-[1px] bg-gray-300 my-[20px]" />

        	<section className="Lenguajes">
          		<h4 className="text-[18px] font-bold text-gray-800 text-center mt-[30px] mb-[20px]">
            		Lenguajes de Programación
          		</h4>
          		<ListaLenguajes />
        	</section>
        	<div className="h-[1px] bg-gray-300 my-[20px]" />

			<Habilidades />
 		</div>
	);
};

export default Menuizquierdo;

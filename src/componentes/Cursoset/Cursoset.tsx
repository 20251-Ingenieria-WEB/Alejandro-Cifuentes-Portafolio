"use client";
import React from 'react';
import Curso from '../Curso/Curso';
import { ICurso } from '@/types';

export type CursosetProps = {
	cursos: ICurso[];
}

const Cursoset: React.FC<CursosetProps>  = ({cursos}) => {
	return (
		<div className="cursoset container mx-auto grid gap-[1px]">
 			{cursos.map((curso) => (
				<Curso 
					key ={curso.id} 
					universidad={curso.universidad} 
					periodo={curso.periodo} 
					titulo={curso.titulo}
					descripcion={curso.descripcion}  
				/>
			))}
 		</div>
	);
};

export default Cursoset;

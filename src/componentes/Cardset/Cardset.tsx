"use client";
import React from 'react';
import Card from '../Card/Card';
import { ICard } from '@/types';

{/*creee un set de cards para poder tener varias y no repetir codigo*/}

export type CardsetProps = {
	cards: ICard[];
};

const Cardset: React.FC<CardsetProps>  = ({cards}) => {
	return (
		<div className="cardset grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-[17px] py-[20px]">
			{cards.map((card) => (
				<Card 
					key ={card.id} 
					name={card.name} 
					description={card.description} 
					imageUrl={card.imageUrl} 
				/>
			))}
 		</div>
	);
};

export default Cardset;

import { Over } from '@dnd-kit/core';
import { ReactNode, useState } from 'react';
import { AlchemyLabContext } from './context';
import { TAlchemyLabContext } from './types';
import { Element } from '../types';

export const AlchemyLabProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [draggedElement, setDraggedElement] = useState<TAlchemyLabContext['draggedElement'] | null>(null);
	const [draggedOver, setDraggedOver] = useState<Over | null>(null);
	const [data, setData] = useState<Element[]>([]);

	return (
		<AlchemyLabContext.Provider
			value={{
				draggedElement,
				setDraggedElement,
				draggedOver,
				setDraggedOver,
				data,
				setData
			}}
		>
			{children}
		</AlchemyLabContext.Provider>
	);
};

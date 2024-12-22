import { ReactNode, useState } from 'react';
import { AlchemyLabContext } from './AlchemyLabContext';
import { TAlchemyLabContext } from '../types';
import { Element } from '../../../types/Element';

export const AlchemyLabProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [draggedElement, setDraggedElement] = useState<TAlchemyLabContext['draggedElement'] | null>(null);
	const [selectedElement, setSelectedElement] = useState<Element | null>(null);
	const [data, setData] = useState<Element[]>([]);

	return (
		<AlchemyLabContext.Provider
			value={{
				draggedElement,
				setDraggedElement,
				selectedElement,
				setSelectedElement,
				data,
				setData
			}}
		>
			{children}
		</AlchemyLabContext.Provider>
	);
};

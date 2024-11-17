import { ReactNode, useState } from 'react';
import { AlchemyLabContext } from './AlchemyLabContext';
import { Element, TAlchemyLabContext } from '../types';

export const AlchemyLabProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [draggedElement, setDraggedElement] = useState<TAlchemyLabContext['draggedElement'] | null>(null);
	const [selectedElement, setSelectedElement] = useState<Element | null>(null);
	const [data, setData] = useState<Element[]>([]);
	const [paletteGridView, setPaletteGridView] = useState<boolean>(false);

	return (
		<AlchemyLabContext.Provider
			value={{
				draggedElement,
				setDraggedElement,
				selectedElement,
				setSelectedElement,
				data,
				setData,
				paletteGridView,
				setPaletteGridView
			}}
		>
			{children}
		</AlchemyLabContext.Provider>
	);
};

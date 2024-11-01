import { ReactNode, useState } from 'react';
import { AlchemyLabContext } from './context';
import { TAlchemyLabContext } from './types';
import { Element } from '../types';

export const AlchemyLabProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [draggedElement, setDraggedElement] = useState<TAlchemyLabContext['draggedElement'] | null>(null);
	const [data, setData] = useState<Element[]>([]);

	const [paletteGridView, setPaletteGridView] = useState<boolean>(false);

	return (
		<AlchemyLabContext.Provider
			value={{
				draggedElement,
				setDraggedElement,
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

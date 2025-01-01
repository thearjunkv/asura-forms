import { ReactNode, useState } from 'react';
import { AlchemyLabContext } from './AlchemyLabContext';
import { TAlchemyLabContext } from '../types';
import { Element } from '../../../types/Element';

const AlchemyLabProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [draggedElement, setDraggedElement] = useState<TAlchemyLabContext['draggedElement'] | null>(null);
	const [selectedElement, setSelectedElement] = useState<Element | null>(null);
	const [invalidElementProperties, setInvalidElementProperties] = useState<string[]>([]);
	const [formData, setFormData] = useState<Element[]>([]);

	return (
		<AlchemyLabContext.Provider
			value={{
				draggedElement,
				setDraggedElement,
				selectedElement,
				setSelectedElement,
				invalidElementProperties,
				setInvalidElementProperties,
				formData,
				setFormData
			}}
		>
			{children}
		</AlchemyLabContext.Provider>
	);
};

export default AlchemyLabProvider;

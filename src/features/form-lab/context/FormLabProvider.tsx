import { ReactNode, useState } from 'react';
import { FormLabContext } from './FormLabContext';
import { TFormLabContext } from '../types';
import { Element } from '../../../types/Element';

const FormLabProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [draggedElement, setDraggedElement] = useState<TFormLabContext['draggedElement'] | null>(null);
	const [selectedElement, setSelectedElement] = useState<Element | null>(null);
	const [invalidElementProperties, setInvalidElementProperties] = useState<string[]>([]);
	const [formData, setFormData] = useState<Element[]>([]);

	return (
		<FormLabContext.Provider
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
		</FormLabContext.Provider>
	);
};

export default FormLabProvider;

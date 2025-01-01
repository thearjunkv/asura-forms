import { useEffect, useRef } from 'react';
import { useAlchemyLab } from '../hooks/useAlchemyLab';
import { StyledProperties } from '../styles/propertiesStyles';
import PropertyElements from './PropertyElements';
import { updateElementInFormData, validateElementProperties } from '../utils/elementHelpers';
import { clone } from '../../../utils/helpers';

const Properties: React.FC = () => {
	const {
		formData,
		setFormData,
		selectedElement,
		setSelectedElement,
		invalidElementProperties,
		setInvalidElementProperties
	} = useAlchemyLab();
	const propertiesBodyRef = useRef<HTMLDivElement>(null);
	const prevElementRef = useRef<string | null>(null);

	useEffect(() => {
		const exit = () => {
			if (selectedElement) {
				if (invalidElementProperties.length > 0) setInvalidElementProperties([]);
				setSelectedElement(null);
			}
		};
		document.addEventListener('click', exit);

		return () => document.removeEventListener('click', exit);
	}, [selectedElement, setSelectedElement, invalidElementProperties, setInvalidElementProperties]);

	useEffect(() => {
		if (selectedElement) prevElementRef.current = selectedElement.elementId;
	}, [selectedElement]);

	useEffect(() => {
		if (selectedElement && prevElementRef.current !== selectedElement.elementId && propertiesBodyRef.current) {
			propertiesBodyRef.current.scrollTop = 0;
		}
	}, [selectedElement]);

	const propertyElements = selectedElement && (
		<PropertyElements invalidElementProperties={invalidElementProperties} />
	);

	const propertiesEmptyMessage = (
		<span className='form-alcmst__properties-no-select'>Select an element to edit properties.</span>
	);

	const propertiesActions = (
		<div className='form-alcmst__properties-actions'>
			<button
				className='form-alcmst__btn'
				onClick={() => {
					if (!selectedElement) return;

					const invalidProps = validateElementProperties(selectedElement);
					if (invalidProps.length > 0) {
						setInvalidElementProperties(invalidProps);
						return;
					}
					if (invalidElementProperties.length > 0) setInvalidElementProperties([]);
					const clonedFormData = clone(formData);
					const response = updateElementInFormData({
						formData: clonedFormData,
						elementId: selectedElement.elementId,
						updatedElement: selectedElement
					});

					if (!response) return;
					setFormData(response.updatedFormData);
					setSelectedElement(null);
				}}
			>
				Save
			</button>
			<button
				className='form-alcmst__btn--secondary'
				onClick={() => {
					if (invalidElementProperties.length > 0) setInvalidElementProperties([]);
					setSelectedElement(null);
				}}
			>
				Cancel
			</button>
		</div>
	);

	return (
		<StyledProperties
			className='form-alcmst__properties'
			onClick={e => e.stopPropagation()}
		>
			<div className='form-alcmst__properties-header'>
				<h2>Element Properties</h2>
			</div>

			<div
				ref={propertiesBodyRef}
				className='form-alcmst__properties-body'
			>
				{selectedElement && propertyElements}
				{!selectedElement && propertiesEmptyMessage}
			</div>
			<div className='form-alcmst__properties-footer'>{selectedElement && propertiesActions}</div>
		</StyledProperties>
	);
};

export default Properties;

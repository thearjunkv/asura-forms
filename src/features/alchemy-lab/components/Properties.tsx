import { useEffect, useRef } from 'react';
import { useAlchemyLab } from '../hooks/useAlchemyLab';
import { StyledProperties } from '../styles/propertiesStyles';
import PropertyElements from './PropertyElements';
import { updateElementInData, validateElementProperties } from '../utils/elementHelpers';
import { clone } from '../../../utils/helpers';

const Properties: React.FC = () => {
	const {
		data,
		setData,
		selectedElement,
		setSelectedElement,
		invalidElementProperties,
		setInvalidElementProperties
	} = useAlchemyLab();
	const propertiesBody = useRef<HTMLDivElement>(null);
	const prevElement = useRef<string | null>(null);

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
		if (selectedElement) prevElement.current = selectedElement.elementId;
	}, [selectedElement]);

	useEffect(() => {
		if (selectedElement && prevElement.current !== selectedElement.elementId && propertiesBody.current) {
			propertiesBody.current.scrollTop = 0;
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
					const clonedData = clone(data);
					const response = updateElementInData({
						data: clonedData,
						elementId: selectedElement.elementId,
						updatedElement: selectedElement
					});

					if (!response) return;
					setData(response.updatedData);
					setSelectedElement(null);
				}}
			>
				Save
			</button>
			<button
				className='form-alcmst__btn--outlined'
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
				ref={propertiesBody}
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

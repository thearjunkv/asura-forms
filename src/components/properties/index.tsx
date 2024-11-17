import { useEffect } from 'react';
import { useAlchemyLab } from '../../hooks/useAlchemyLab';
import { StyledProperties } from './styles';
import { Input, InputNumber } from 'antd';

const data = {
	Title: [
		{ fieldType: 'text', fieldName: 'text', required: true },
		{ fieldType: 'dropdown', fieldName: 'headingLevel' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Paragraph: [
		{ fieldType: 'text', fieldName: 'text', required: true },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Separator: [{ fieldType: 'textarea', fieldName: 'styles' }],
	Spacer: [{ fieldType: 'number', fieldName: 'height' }],
	Section: [{ fieldType: 'textarea', fieldName: 'styles' }],
	Name: [],
	Address: [],
	Email: [],
	PhoneNumber: [],
	Text: [],
	TextArea: [],
	Number: [],
	Dropdown: [],
	Checkbox: [],
	CheckboxGroup: [],
	Radio: [],
	Date: [],
	Time: [],
	Button: []
};

const Properties: React.FC = () => {
	const { selectedElement, setSelectedElement } = useAlchemyLab();

	useEffect(() => {
		const exit = () => {
			if (selectedElement !== null) setSelectedElement(null);
		};
		document.addEventListener('click', exit);

		return () => document.removeEventListener('click', exit);
	}, [selectedElement, setSelectedElement]);

	return (
		<StyledProperties
			className='form-alcmst--properties'
			onClick={e => e.stopPropagation()}
		>
			<h2>Element Properties</h2>
			{selectedElement && (
				<div>
					<div>{selectedElement.elementType}</div>

					{data[selectedElement.elementType].map(field => (
						<div>{field.fieldName}</div>
					))}
				</div>
			)}
			<Input placeholder='Name' />
			<InputNumber />
			<Input.TextArea />
		</StyledProperties>
	);
};

export default Properties;

import { useEffect } from 'react';
import { Input, InputNumber, Select } from 'antd';
import { useAlchemyLab } from '../hooks/useAlchemyLab';
import { StyledProperties } from '../styles/propertiesStyles';

const data = {
	Title: [
		{ fieldType: 'text', fieldName: 'textContent', required: true },
		{ fieldType: 'dropdown', fieldName: 'headingLevel', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Paragraph: [
		{ fieldType: 'text', fieldName: 'textContent', required: true },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Separator: [{ fieldType: 'textarea', fieldName: 'styles' }],
	Spacer: [{ fieldType: 'number', fieldName: 'height' }],
	Section: [{ fieldType: 'textarea', fieldName: 'styles' }],
	Name: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'number', fieldName: 'minLength' },
		{ fieldType: 'number', fieldName: 'maxLength' },
		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Address: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'number', fieldName: 'minLength' },
		{ fieldType: 'number', fieldName: 'maxLength' },
		{ fieldType: 'number', fieldName: 'rows' },
		{ fieldType: 'number', fieldName: 'cols' },
		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Email: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'number', fieldName: 'minLength' },
		{ fieldType: 'number', fieldName: 'maxLength' },
		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	PhoneNumber: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'number', fieldName: 'minLength' },
		{ fieldType: 'number', fieldName: 'maxLength' },
		{ fieldType: 'toggle', fieldName: 'includeCountryCode' },
		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Text: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'number', fieldName: 'minLength' },
		{ fieldType: 'number', fieldName: 'maxLength' },
		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	TextArea: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'number', fieldName: 'minLength' },
		{ fieldType: 'number', fieldName: 'maxLength' },
		{ fieldType: 'number', fieldName: 'rows' },
		{ fieldType: 'number', fieldName: 'cols' },
		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Number: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'number', fieldName: 'min' },
		{ fieldType: 'number', fieldName: 'max' },
		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Select: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'toggle', fieldName: 'allowMultiSelect' },

		{
			fieldType: 'selectOptionsList',
			options: [],
			optionsMetadata: [
				{ fieldType: 'text', fieldName: 'label', required: true, display: true },
				{ fieldType: 'text', fieldName: 'value', required: true, display: true },
				{ fieldType: 'boolean', fieldName: 'selected', display: false },
				{ fieldType: 'boolean', fieldName: 'disabled', display: false }
			]
		},
		{ fieldType: 'select--selectCheckedList', fieldName: 'Selected Option' },
		{ fieldType: 'select--selectDisabledList', fieldName: 'Disabled Options' },

		{ fieldType: 'select', fieldName: 'selectedOptions' },
		{ fieldType: 'select', fieldName: 'disabledOptions' },
		{ fieldType: 'select', fieldName: 'disabledOptions' },

		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Checkbox: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },

		{ fieldType: 'text', fieldName: 'label', required: true },
		{ fieldType: 'text', fieldName: 'value', required: true },

		{ fieldType: 'toggle', fieldName: 'checked' },
		{ fieldType: 'toggle', fieldName: 'disabled' },

		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	CheckboxGroup: [
		{ fieldType: 'text', fieldName: 'name', required: true },

		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'text', fieldName: 'label', required: true },
		{ fieldType: 'toggle', fieldName: 'required' },

		{
			fieldType: 'checkboxOptionsList',
			options: [],
			optionsMetadata: [
				{ fieldType: 'text', fieldName: 'label', required: true, display: true },
				{ fieldType: 'text', fieldName: 'value', required: true, display: true },
				{ fieldType: 'boolean', fieldName: 'checked', display: false },
				{ fieldType: 'boolean', fieldName: 'disabled', display: false }
			]
		},
		{ fieldType: 'select--checkboxCheckedList', fieldName: 'Checked Options' },
		{ fieldType: 'select--checkboxDisabledList', fieldName: 'Disabled Options' },

		{ fieldType: 'toggle', fieldName: 'checked' },
		{ fieldType: 'toggle', fieldName: 'disabled' },

		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Radio: [
		{ fieldType: 'text', fieldName: 'name', required: true },
		{ fieldType: 'toggle', fieldName: 'disabled' },

		{ fieldType: 'text', fieldName: 'label', required: true },
		{ fieldType: 'toggle', fieldName: 'required' },

		{
			fieldType: 'radioOptionsList',
			options: [],
			optionsMetadata: [
				{ fieldType: 'text', fieldName: 'label', required: true, display: true },
				{ fieldType: 'text', fieldName: 'value', required: true, display: true },
				{ fieldType: 'boolean', fieldName: 'checked', display: false },
				{ fieldType: 'boolean', fieldName: 'disabled', display: false }
			]
		},
		{ fieldType: 'select--radioChecked', fieldName: 'Checked Option' },
		{ fieldType: 'select--radioDisabledList', fieldName: 'Disabled Options' },

		{ fieldType: 'toggle', fieldName: 'checked' },
		{ fieldType: 'toggle', fieldName: 'disabled' },

		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Date: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },

		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },

		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Time: [
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'text', fieldName: 'name', required: true },

		{ fieldType: 'toggle', fieldName: 'readOnly' },
		{ fieldType: 'toggle', fieldName: 'disabled' },

		{ fieldType: 'text', fieldName: 'label' },
		{ fieldType: 'toggle', fieldName: 'required' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	],
	Button: [
		{ fieldType: 'dropdown', fieldName: 'type', options: ['submit', 'button', 'reset'] },
		{ fieldType: 'text', fieldName: 'id' },
		{ fieldType: 'toggle', fieldName: 'disabled' },
		{ fieldType: 'text', fieldName: 'placeholder' },
		{ fieldType: 'textarea', fieldName: 'styles' }
	]
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
			<Select
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
			/>
		</StyledProperties>
	);
};

export default Properties;

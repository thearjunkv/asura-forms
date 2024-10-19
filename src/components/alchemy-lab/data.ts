import { Element } from '../../types';

const cleanState: Element[] = [
	{
		elementType: 'Title',
		text: 'Title Field',
		styles: '',
		uid: ''
	},
	{
		elementType: 'Paragraph',
		text: 'Paragraph Field',
		styles: '',
		uid: ''
	},
	{
		elementType: 'Separator',
		styles: '',
		uid: ''
	},
	{
		elementType: 'Spacer',
		height: '20',
		styles: '',
		uid: ''
	},
	{
		elementType: 'Section',
		children: [],
		styles: '',
		uid: ''
	},
	{
		elementType: 'Name',
		attributes: {
			type: 'text',
			id: '',
			name: 'name',
			placeholder: '',
			readOnly: false,
			disabled: false,
			minLength: 0,
			maxLength: 100
		},
		label: 'Name',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true
	},
	{
		elementType: 'Address',
		attributes: {
			id: '',
			name: 'address',
			placeholder: '',
			readOnly: false,
			disabled: false,
			minLength: 0,
			maxLength: 100,
			rows: 5,
			cols: 40
		},
		label: '',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true
	},
	{
		elementType: 'Email',
		attributes: {
			type: 'text',
			id: '',
			name: 'email',
			placeholder: '',
			readOnly: false,
			disabled: false,
			minLength: 0,
			maxLength: 100
		},
		label: 'Email',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true
	},
	{
		elementType: 'PhoneNumber',
		attributes: {
			type: 'tel',
			id: '',
			name: 'phoneNumber',
			placeholder: '',
			readOnly: false,
			disabled: false,
			minLength: 10,
			maxLength: 15
		},
		label: 'Phone number',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true,
		includeCountryCode: false
	},
	{
		elementType: 'Text',
		attributes: {
			type: 'text',
			id: '',
			name: '',
			placeholder: '',
			readOnly: false,
			disabled: false,
			minLength: 0,
			maxLength: 100
		},
		label: 'Text',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true
	},
	{
		elementType: 'TextArea',
		attributes: {
			id: '',
			name: '',
			placeholder: '',
			readOnly: false,
			disabled: false,
			minLength: 0,
			maxLength: 100,
			rows: 5,
			cols: 40
		},
		label: 'Textarea',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true
	},
	{
		elementType: 'Number',
		attributes: {
			type: 'number',
			id: '',
			name: '',
			placeholder: '',
			readOnly: false,
			disabled: false,
			min: 0,
			max: 100
		},
		label: 'Number',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true
	},
	{
		elementType: 'Dropdown',
		attributes: {
			id: '',
			name: '',
			disabled: false
		},
		label: 'Dropdown',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true,
		allowMultiSelect: false,
		dataSourceType: 'values',
		options: [
			{
				label: 'Option 1',
				value: 'option_1',
				selected: false,
				disabled: false
			}
		]
	},
	{
		elementType: 'Checkbox',
		attributes: {
			type: 'checkbox',
			name: ''
		},
		styles: '',
		uid: '',
		required: true,
		label: 'Option 1',
		value: 'option_1',
		checked: false,
		disabled: false
	},
	{
		elementType: 'CheckboxGroup',
		attributes: {
			type: 'checkbox',
			name: ''
		},
		label: 'Checkbox',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true,
		options: [
			{
				label: 'Option 1',
				value: 'option_1',
				checked: false,
				disabled: false
			}
		]
	},
	{
		elementType: 'Radio',
		attributes: {
			type: 'radio',
			name: '',
			disabled: false
		},
		label: 'Radio',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true,
		options: [
			{
				label: 'Option 1',
				value: 'option_1',
				checked: false,
				disabled: false
			}
		]
	},
	{
		elementType: 'Date',
		attributes: {
			type: 'date',
			id: '',
			name: '',
			readOnly: false,
			disabled: false
		},
		label: 'Date',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true
	},
	{
		elementType: 'Time',
		attributes: {
			type: 'time',
			id: '',
			name: '',
			readOnly: false,
			disabled: false
		},
		label: 'Time',
		labelPosition: 'top',
		styles: '',
		uid: '',
		required: true
	},
	{
		elementType: 'Button',
		attributes: {
			type: 'submit',
			id: '',
			disabled: false,
			placeholder: 'submit'
		},
		styles: '',
		uid: ''
	}
];

export default cleanState;

import { Element } from '../types/Element';

const cleanState: Element[] = [
	{
		elementType: 'Title',
		text: 'Title Field',
		headingLevel: 'h2',

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Paragraph',
		text: 'Paragraph Field',

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Separator',

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Spacer',
		height: '20',

		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Section',
		children: [],

		styles: '',
		elementId: '',
		sectionId: ''
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
		label: 'Name Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
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
			rows: 4,
			cols: 40
		},
		label: 'Address Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
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
		label: 'Email Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
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
		includeCountryCode: false,
		label: 'Phone number Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
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
		label: 'Text Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
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
		label: 'Textarea Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
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
		label: 'Number Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Select',
		attributes: {
			id: '',
			name: '',
			disabled: false
		},
		allowMultiSelect: false,
		dataSourceType: 'values',
		options: [
			{
				label: 'Option 1',
				value: 'option_1',
				selected: false,
				disabled: false
			}
		],

		label: 'Dropdown Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Checkbox',
		attributes: {
			type: 'checkbox',
			name: ''
		},
		label: 'Option 1',
		value: 'option_1',
		checked: false,
		disabled: false,

		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'CheckboxGroup',
		attributes: {
			type: 'checkbox',
			name: ''
		},
		label: 'Checkbox Group Field',
		required: true,

		options: [
			{
				label: 'Option 1',
				value: 'option_1',
				checked: false,
				disabled: false
			}
		],

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Radio',
		attributes: {
			type: 'radio',
			name: '',
			disabled: false
		},
		label: 'Radio Field',
		required: true,

		options: [
			{
				label: 'Option 1',
				value: 'option_1',
				checked: false,
				disabled: false
			}
		],

		styles: '',
		elementId: '',
		sectionId: ''
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
		label: 'Date Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
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
		label: 'Time Field',
		required: true,

		styles: '',
		elementId: '',
		sectionId: ''
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
		elementId: '',
		sectionId: ''
	}
];

export default cleanState;

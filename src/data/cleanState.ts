import { Element } from '../types/Element';

export const cleanState: Element[] = [
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
		height: 20,

		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Section',
		name: 'section',
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
			minLength: 0,
			maxLength: 100
		},
		label: 'Name Field',
		required: false,

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
			minLength: 0,
			maxLength: 100,
			rows: 4,
			cols: 40
		},
		label: 'Address Field',
		required: false,

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
			minLength: 0,
			maxLength: 100
		},
		label: 'Email Field',
		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'PhoneNumber',
		attributes: {
			type: 'tel',
			id: '',
			name: 'phone_number',
			placeholder: '',
			minLength: 10,
			maxLength: 15
		},
		includeCountryCode: false,
		label: 'Phone number Field',
		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Text',
		attributes: {
			type: 'text',
			id: '',
			name: 'text',
			placeholder: '',
			minLength: 0,
			maxLength: 100
		},
		label: 'Text Field',
		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'TextArea',
		attributes: {
			id: '',
			name: 'textarea',
			placeholder: '',
			minLength: 0,
			maxLength: 100,
			rows: 5,
			cols: 40
		},
		label: 'Textarea Field',
		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Number',
		attributes: {
			type: 'number',
			id: '',
			name: 'number',
			placeholder: '',
			min: 0,
			max: 100
		},
		label: 'Number Field',
		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Select',
		attributes: {
			id: '',
			name: 'select',
			placeholder: 'Select an option'
		},
		allowMultiSelect: false,
		options: [
			{
				label: 'Option 1',
				value: 'option_1'
			}
		],

		label: 'Select Field',
		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Checkbox',
		attributes: {
			type: 'checkbox',
			name: 'checkbox'
		},
		label: 'Option 1',
		value: 'option_1',

		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'CheckboxGroup',
		attributes: {
			type: 'checkbox',
			name: 'checkbox_group'
		},
		label: 'Checkbox Group Field',
		required: false,

		options: [
			{
				label: 'Option 1',
				value: 'option_1'
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
			name: 'radio'
		},
		label: 'Radio Field',
		required: false,

		options: [
			{
				label: 'Option 1',
				value: 'option_1'
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
			name: 'date'
		},
		label: 'Date Field',
		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Time',
		attributes: {
			type: 'time',
			id: '',
			name: 'time'
		},
		label: 'Time Field',
		required: false,

		styles: '',
		elementId: '',
		sectionId: ''
	},
	{
		elementType: 'Button',
		attributes: {
			type: 'submit',
			id: '',
			placeholder: 'submit'
		},

		styles: '',
		elementId: '',
		sectionId: ''
	}
];

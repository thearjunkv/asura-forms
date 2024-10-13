import { FormElement } from './types/FormElements';

const template: FormElement[] = [
    {
        elementType: 'Name',
        uid: '',
        label: 'Name',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'text',
            id: '',
            name: 'name',
            placeholder: '',
            readOnly: false,
            disabled: false,
            minLength: 0,
            maxLength: 100
        }
    },
    {
        elementType: 'Email',
        uid: '',
        label: 'Email',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'text',
            id: '',
            name: 'email',
            placeholder: '',
            readOnly: false,
            disabled: false,
            minLength: 0,
            maxLength: 100
        }
    },
    {
        elementType: 'Phone number',
        uid: '',
        requireCountryCode: false,
        label: 'Phone number',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'tel',
            id: '',
            name: 'phoneNumber',
            placeholder: '',
            readOnly: false,
            disabled: false
        }
    },
    {
        elementType: 'Text',
        uid: '',
        label: '',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'text',
            id: '',
            name: '',
            placeholder: '',
            readOnly: false,
            disabled: false,
            minLength: 0,
            maxLength: 100
        }
    },
    {
        elementType: 'Number',
        uid: '',
        label: '',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'number',
            id: '',
            name: '',
            placeholder: '',
            readOnly: false,
            disabled: false,
            min: 0,
            max: 100
        }
    },
    {
        elementType: 'Textarea',
        uid: '',
        label: '',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
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
        }
    },
    {
        elementType: 'Dropdown',
        uid: '',
        label: '',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            id: '',
            name: '',
            disabled: false
        },
        dataSourceType: 'values',
        options: []
    },
    {
        elementType: 'Checkbox',
        uid: '',
        label: '',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'checkbox',
            name: ''
        },
        options: []
    },
    {
        elementType: 'Radio',
        uid: '',
        label: '',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'radio',
            name: '',
            disabled: false
        },
        options: []
    },
    {
        elementType: 'Date',
        uid: '',
        label: '',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'date',
            id: '',
            name: '',
            readOnly: false,
            disabled: false
        }
    },
    {
        elementType: 'Time',
        uid: '',
        label: '',
        labelPosition: 'top',
        labelStyles: '',
        elementStyles: '',
        required: true,
        attributes: {
            type: 'time',
            id: '',
            name: '',
            readOnly: false,
            disabled: false
        }
    },
    {
        elementType: 'Button',
        uid: '',
        elementStyles: '',
        attributes: {
            type: 'submit',
            id: '',
            disabled: false,
            placeholder: 'submit'
        }
    }
];

export default template;

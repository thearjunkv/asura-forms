export type TextAttrs = {
	type: 'text';
	id: string;
	name: string;
	placeholder: string;
	readOnly: boolean;
	disabled: boolean;
	minLength: number;
	maxLength: number;
};

export type TextareaAttrs = {
	id: string;
	name: string;
	placeholder: string;
	readOnly: boolean;
	disabled: boolean;
	minLength: number;
	maxLength: number;
	rows: number;
	cols: number;
};

export type NumberAttrs = {
	type: 'number';
	id: string;
	name: string;
	placeholder: string;
	readOnly: boolean;
	disabled: boolean;
	min: number;
	max: number;
};

export type TelAttrs = {
	type: 'tel';
	id: string;
	name: string;
	placeholder: string;
	readOnly: boolean;
	disabled: boolean;
	minLength: number;
	maxLength: number;
};

export type SelectAttrs = {
	id: string;
	name: string;
	disabled: boolean;
};

export type CheckboxAttrs = {
	type: 'checkbox';
	name: string;
};

export type RadioAttrs = {
	type: 'radio';
	name: string;
	disabled: boolean;
};

export type DateAttrs = {
	type: 'date';
	id: string;
	name: string;
	readOnly: boolean;
	disabled: boolean;
};

export type TimeAttrs = {
	type: 'time';
	id: string;
	name: string;
	readOnly: boolean;
	disabled: boolean;
};

export type ButtonAttrs = {
	type: 'button' | 'reset' | 'submit';
	id: string;
	disabled: boolean;
	placeholder: string;
};

type Common = {
	label: string;
	labelPosition: 'top' | 'left';

	styles: string;

	uid: string;
	required: boolean;
};

export type TName = {
	elementType: 'Name';
	attributes: TextAttrs;
} & Common;

export type TAddress = {
	elementType: 'Address';
	attributes: TextareaAttrs;
} & Common;

export type TEmail = {
	elementType: 'Email';
	attributes: TextAttrs;
} & Common;

export type TPhoneNumber = {
	elementType: 'PhoneNumber';
	attributes: TelAttrs;
	includeCountryCode: boolean;
} & Common;

export type TText = {
	elementType: 'Text';
	attributes: TextAttrs;
} & Common;

export type TTextArea = {
	elementType: 'TextArea';
	attributes: TextareaAttrs;
} & Common;

export type TNumber = {
	elementType: 'Number';
	attributes: NumberAttrs;
} & Common;

type TDropdownOptions =
	| {
			dataSourceType: 'values';
			options: {
				label: string;
				value: string;
				selected: boolean;
				disabled: boolean;
			}[];
	  }
	| {
			dataSourceType: 'api';
			apiConfig: {
				url: string;
				requestHeaders: { [key: string]: string | number | boolean }[];
				dataPath: string;
				labelKey: string;
				valueKey: string;
			};
	  };

export type TDropdown = {
	elementType: 'Dropdown';
	attributes: SelectAttrs;
	allowMultiSelect: boolean;
} & TDropdownOptions &
	Common;

export type TCheckbox = {
	elementType: 'Checkbox';
	attributes: CheckboxAttrs;
	label: string;
	value: string;
	checked: boolean;
	disabled: boolean;
} & Omit<Common, 'labelPosition'>;

export type TCheckboxGroup = {
	elementType: 'CheckboxGroup';
	attributes: CheckboxAttrs;
	options: {
		label: string;
		value: string;
		checked: boolean;
		disabled: boolean;
	}[];
} & Common;

export type TRadio = {
	elementType: 'Radio';
	attributes: RadioAttrs;
	options: {
		label: string;
		value: string;
		checked: boolean;
		disabled: boolean;
	}[];
} & Common;

export type TDate = {
	elementType: 'Date';
	attributes: DateAttrs;
} & Common;

export type TTime = {
	elementType: 'Time';
	attributes: TimeAttrs;
} & Common;

export type TButton = {
	elementType: 'Button';
	attributes: ButtonAttrs;

	styles: string;
	uid: string;
};

type Temp =
	| TName
	| TAddress
	| TEmail
	| TPhoneNumber
	| TText
	| TTextArea
	| TNumber
	| TDropdown
	| TCheckbox
	| TCheckboxGroup
	| TRadio
	| TDate
	| TTime
	| TButton;

// export type FormElement = Partial<
// 	Temp & {
// 		// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 		[key: string]: any;
// 	}
// >;

// export type FormElement = Partial<Temp>;
export type FormElement = Temp;

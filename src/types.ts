import { Dispatch, SetStateAction } from 'react';

type Common = {
	styles: string;

	elementId: string;
	sectionId: string;
};

// Layout Elements

export type TTitle = {
	elementType: 'Title';
	text: string;
	headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & Common;

export type TParagraph = {
	elementType: 'Paragraph';
	text: string;
} & Common;

export type TSeparator = {
	elementType: 'Separator';
} & Common;

export type TSpacer = {
	elementType: 'Spacer';
	height: string;
} & Common;

export type TSection = {
	elementType: 'Section';
	children: Element[];
} & Common;

// Form Elements

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

export type TName = {
	elementType: 'Name';
	attributes: TextAttrs;

	label: string;
	required: boolean;
} & Common;

export type TAddress = {
	elementType: 'Address';
	attributes: TextareaAttrs;

	label: string;
	required: boolean;
} & Common;

export type TEmail = {
	elementType: 'Email';
	attributes: TextAttrs;

	label: string;
	required: boolean;
} & Common;

export type TPhoneNumber = {
	elementType: 'PhoneNumber';
	attributes: TelAttrs;
	includeCountryCode: boolean;

	label: string;
	required: boolean;
} & Common;

export type TText = {
	elementType: 'Text';
	attributes: TextAttrs;

	label: string;
	required: boolean;
} & Common;

export type TTextArea = {
	elementType: 'TextArea';
	attributes: TextareaAttrs;

	label: string;
	required: boolean;
} & Common;

export type TNumber = {
	elementType: 'Number';
	attributes: NumberAttrs;

	label: string;
	required: boolean;
} & Common;

export type DropdownOptions = {
	label: string;
	value: string;
	selected: boolean;
	disabled: boolean;
}[];

export type TDropdown =
	| ({
			elementType: 'Dropdown';
			attributes: SelectAttrs;

			allowMultiSelect: boolean;
			dataSourceType: 'values';
			options: DropdownOptions;

			label: string;
			required: boolean;
	  } & Common)
	| ({
			elementType: 'Dropdown';
			attributes: SelectAttrs;

			allowMultiSelect: boolean;
			dataSourceType: 'api';
			apiConfig: {
				url: string;
				requestHeaders: { [key: string]: string | number | boolean }[];
				dataPath: string;
				labelKey: string;
				valueKey: string;
			};

			label: string;
			required: boolean;
	  } & Common);

export type TCheckbox = {
	elementType: 'Checkbox';
	attributes: CheckboxAttrs;
	label: string;
	value: string;
	checked: boolean;
	disabled: boolean;

	required: boolean;
} & Common;

export type TCheckboxGroup = {
	elementType: 'CheckboxGroup';
	attributes: CheckboxAttrs;
	options: {
		label: string;
		value: string;
		checked: boolean;
		disabled: boolean;
	}[];

	label: string;
	required: boolean;
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

	label: string;
	required: boolean;
} & Common;

export type TDate = {
	elementType: 'Date';
	attributes: DateAttrs;

	label: string;
	required: boolean;
} & Common;

export type TTime = {
	elementType: 'Time';
	attributes: TimeAttrs;

	label: string;
	required: boolean;
} & Common;

export type TButton = {
	elementType: 'Button';
	attributes: ButtonAttrs;
} & Common;

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
	| TButton
	| TTitle
	| TParagraph
	| TSeparator
	| TSpacer
	| TSection;

// export type FormElement = Partial<
// 	Temp & {
// 		// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 		[key: string]: any;
// 	}
// >;

// export type FormElement = Partial<Temp>;
export type Element = Temp;

export type TDndContext = {
	children: React.ReactNode;
};

export type TDraggable = {
	children: React.ReactNode;
	id: string;
	data: { elementId: string; elementType: Element['elementType']; isPaletteElement: boolean };
};

export type TAlchemyLabContext = {
	draggedElement: {
		elementId: string;
		elementType: Element['elementType'];
		isPaletteElement: boolean;
	} | null;
	setDraggedElement: Dispatch<
		SetStateAction<{
			elementId: string;
			elementType: Element['elementType'];
			isPaletteElement: boolean;
		} | null>
	>;

	data: Element[];
	setData: Dispatch<SetStateAction<Element[]>>;

	paletteGridView: boolean;
	setPaletteGridView: Dispatch<SetStateAction<boolean>>;
};

export type TAlchemyLab = {
	title?: string;
	paletteGridView?: boolean;
	height?: number;
	data?: Element[];
	onSave: (data: Element[]) => void;
};

export type TPaletteElement = { text: string; icon: JSX.Element };

export type TPaletteElementDataList = ({ name: Element['elementType'] } & TPaletteElement)[];

export type TBoardElement = {
	element: Element;
	isOverlay?: boolean;
	nestLevel: number;
};

export type TCompileJsx = {
	element: Element;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: (e: any) => void;
};

export type TProperties = { element?: Element };

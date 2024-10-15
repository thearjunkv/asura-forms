import { FormElement } from './FormElements';

export type DragElement = {
	isWidget: boolean;
	elementType: FormElement['elementType'];
	uid: string;
} | null;

export type TProperties = {
	show: boolean;
	element: FormElement | null;
};

export type TPicker = {
	dStart: (type: FormElement['elementType'], uid: string, isWidget: boolean) => void;
	dStop: () => void;
};

export type BuilerProps = {
	formData?: FormElement[];
	onSave: (formData: FormElement[]) => void;
};

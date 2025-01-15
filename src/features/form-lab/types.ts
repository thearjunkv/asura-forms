import { Dispatch, SetStateAction } from 'react';
import { Element } from '../../types/Element';
import { ThemeConfig } from 'antd';

export type TFormLabContext = {
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

	selectedElement: Element | null;
	setSelectedElement: Dispatch<SetStateAction<Element | null>>;
	invalidElementProperties: string[];
	setInvalidElementProperties: Dispatch<SetStateAction<string[]>>;

	formData: Element[];
	setFormData: Dispatch<SetStateAction<Element[]>>;
};

export type TFormLab = {
	title?: string;
	paletteGridView?: boolean;
	height?: number;
	themeOverride?: ThemeConfig;
	formData?: Element[];
	onSave: (formData: Element[]) => void;
};

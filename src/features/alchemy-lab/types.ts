import { Dispatch, SetStateAction } from 'react';
import { Element } from '../../types/Element';

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

	selectedElement: Element | null;
	setSelectedElement: Dispatch<SetStateAction<Element | null>>;

	data: Element[];
	setData: Dispatch<SetStateAction<Element[]>>;
};

export type TAlchemyLab = {
	title?: string;
	paletteGridView?: boolean;
	height?: number;
	data?: Element[];
	onSave: (data: Element[]) => void;
};

export type TPalette = { paletteGridView?: boolean };

export type TPaletteElement = { text: string; icon: JSX.Element; paletteGridView?: boolean };

export type TPaletteElementDataList = ({ name: Element['elementType'] } & TPaletteElement)[];

export type TBoardElement = {
	element: Element;
	isOverlay?: boolean;
	nestLevel: number;
};

import { Dispatch, SetStateAction } from 'react';
import { Element } from '../types';
import { Over } from '@dnd-kit/core';

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
	dragOver: Over | null;
	setDragOver: Dispatch<SetStateAction<Over | null>>;
	data: Element[];
	setData: Dispatch<SetStateAction<Element[]>>;
};

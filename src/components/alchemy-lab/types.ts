import { Element } from '../../types';

export type TAlchemyLab = {
	title?: string;
	paletteGridView?: boolean;
	height?: number;
	data?: Element[];
	onSave: (data: Element[]) => void;
};

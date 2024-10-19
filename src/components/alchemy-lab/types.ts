import { Element } from '../../types';

export type AlchemyLabProps = {
	title?: string;
	paletteGridView?: boolean;
	height?: number;
	data?: Element[];
	onSave: (data: Element[]) => void;
};

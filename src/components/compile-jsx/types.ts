import { Element } from '../../types';

export type TCompileJsx = {
	element: Element;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: (e: any) => void;
};

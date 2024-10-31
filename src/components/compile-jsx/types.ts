import { ReactNode } from 'react';
import { Element } from '../../types';

export type TCompileJsx = {
	element: Element;
	isOverlay?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: (e: any) => void;
};

export type TBoardElementWrapper = {
	element: Element;
	isOverlay?: boolean;
	children: ReactNode;
};

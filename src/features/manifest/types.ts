import { Element } from '../../types/Element';

export type TManifest = {
	data: Element[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onSubmit: (formValues: { [property: string]: any }) => void;
};

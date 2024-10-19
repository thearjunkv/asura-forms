import { Element } from '../../types';

export type TPalette = { gridView?: boolean };

export type TPaletteElement = { element: Element['elementType']; text: string; icon: JSX.Element };

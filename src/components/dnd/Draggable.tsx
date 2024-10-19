import { useDraggable } from '@dnd-kit/core';
import { Element } from '../../types';

type TDraggable = {
	children: React.ReactNode;
	id: string;
	elementType: Element['elementType'];
	isPaletteElement: boolean;
};

export function Draggable({ id, elementType, isPaletteElement, children }: TDraggable) {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id,
		data: {
			elementType,
			isPaletteElement
		}
	});

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
		>
			{children}
		</div>
	);
}

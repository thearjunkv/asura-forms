import { useDraggable } from '@dnd-kit/core';
import { Element } from '../../types';

type TDraggable = {
	children: React.ReactNode;
	elementId: string;
	elementType: Element['elementType'];
	isPaletteElement: boolean;
};

export function Draggable({ elementId, elementType, isPaletteElement, children }: TDraggable) {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id: elementId,
		data: {
			elementId,
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

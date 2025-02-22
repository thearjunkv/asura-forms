import { useDraggable } from '@dnd-kit/core';
import { Element } from '../../../types/Element';

type TDraggable = {
	children: React.ReactNode;
	id: string;
	data: { elementId: string; elementType: Element['elementType']; isPaletteElement: boolean };
};

function Draggable({ children, id, data }: TDraggable) {
	const { attributes, listeners, setNodeRef } = useDraggable({ id, data });

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

export default Draggable;

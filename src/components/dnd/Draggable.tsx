import { useDraggable } from '@dnd-kit/core';
import { TDraggable } from '../../types';

export function Draggable({ children, id, data }: TDraggable) {
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

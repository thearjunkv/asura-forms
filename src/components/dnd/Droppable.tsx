import { useDroppable } from '@dnd-kit/core';

type TDroppable = {
	children: React.ReactNode;
	id: string;
	elementId: string;
};

export function Droppable({ id, elementId, children }: TDroppable) {
	const { setNodeRef } = useDroppable({
		id,
		data: {
			elementId
		}
	});

	return <div ref={setNodeRef}>{children}</div>;
}

import { useDroppable } from '@dnd-kit/core';

type TDroppable = {
	children: React.ReactNode;
	id: string;
};

export function Droppable({ id, children }: TDroppable) {
	const { setNodeRef } = useDroppable({
		id
	});

	return <div ref={setNodeRef}>{children}</div>;
}

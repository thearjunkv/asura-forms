import { DndContext, closestCenter, closestCorners } from '@dnd-kit/core';

type TDndContext = {
	children: React.ReactNode;
	collisionDetection?: 'closestCenter' | 'closestCorners';
};

export function DndContextWrapper({ children, collisionDetection }: TDndContext) {
	return (
		<DndContext
			collisionDetection={
				collisionDetection === 'closestCenter'
					? closestCenter
					: collisionDetection === 'closestCorners'
					? closestCorners
					: undefined
			}
		>
			{children}
		</DndContext>
	);
}

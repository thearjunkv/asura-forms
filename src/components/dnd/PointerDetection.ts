import { CollisionDetection, DroppableContainer } from '@dnd-kit/core';

export const pointerBasedCollision: CollisionDetection = ({ pointerCoordinates, droppableContainers }) => {
	if (!pointerCoordinates) return [];

	const collisions = droppableContainers
		.map((droppable: DroppableContainer) => {
			const { rect, id } = droppable;

			if (!rect.current) return null;

			const isWithinBounds =
				pointerCoordinates.x >= rect.current.left &&
				pointerCoordinates.x <= rect.current.right &&
				pointerCoordinates.y >= rect.current.top &&
				pointerCoordinates.y <= rect.current.bottom;

			if (isWithinBounds) {
				const distanceX = pointerCoordinates.x - (rect.current.left + rect.current.width / 2);
				const distanceY = pointerCoordinates.y - (rect.current.top + rect.current.height / 2);
				const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

				return { id, distance };
			}

			return null;
		})
		.filter((collision): collision is { id: string; distance: number } => collision !== null)
		.sort((a, b) => a.distance - b.distance);

	return collisions;
};

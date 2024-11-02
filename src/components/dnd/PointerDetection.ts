import { CollisionDetection, DroppableContainer } from '@dnd-kit/core';

const THRESHOLD = 2;

export const pointerBasedCollision: CollisionDetection = ({ pointerCoordinates, droppableContainers }) => {
	if (!pointerCoordinates) return [];

	const collisions = droppableContainers.map((droppable: DroppableContainer) => {
		const { rect, id } = droppable;

		if (!rect.current) return null;

		const isWithinBounds =
			pointerCoordinates.x >= rect.current.left - THRESHOLD &&
			pointerCoordinates.x <= rect.current.right + THRESHOLD &&
			pointerCoordinates.y >= rect.current.top - THRESHOLD &&
			pointerCoordinates.y <= rect.current.bottom + THRESHOLD;

		if (isWithinBounds) {
			const distanceX = pointerCoordinates.x - (rect.current.left + rect.current.width / 2);
			const distanceY = pointerCoordinates.y - (rect.current.top + rect.current.height / 2);
			const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

			return { id, distance };
		}

		return null;
	});

	const validCollisions = collisions.filter(collision => collision !== null);

	const topOrBottomHalfCollision = validCollisions.find(collision => {
		const id = collision.id as string;
		const droppableArea = id.split('-')[0];
		return droppableArea === 'topHalf' || droppableArea === 'bottomHalf';
	});
	if (topOrBottomHalfCollision) return [topOrBottomHalfCollision];

	const sectionCollisions = validCollisions
		.filter(collision => {
			const id = collision.id as string;
			return id.split('-')[0] === 'section';
		})
		.sort((a, b) => a.distance - b.distance);
	if (sectionCollisions.length > 0) return [sectionCollisions[0]];

	const mainBoardCollision = validCollisions.find(collision => {
		const id = collision.id as string;
		return id.split('-')[0] === 'mainBoard';
	});
	if (mainBoardCollision) return [mainBoardCollision];

	return [];
};

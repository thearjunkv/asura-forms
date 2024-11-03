import { CollisionDetection, DroppableContainer } from '@dnd-kit/core';

let threshold = 0;

export const pointerBasedCollision: CollisionDetection = ({ pointerCoordinates, droppableContainers }) => {
	if (!pointerCoordinates) return [];

	const collisions = droppableContainers.map((droppable: DroppableContainer) => {
		const { rect, id } = droppable;
		if (!rect.current) return null;

		const droppableArea = (id as string).split('-');
		if (droppableArea[0] === 'topHalf' || droppableArea[0] === 'bottomHalf') threshold = 1;
		else threshold = 0;

		const isWithinBounds =
			pointerCoordinates.x >= rect.current.left - threshold &&
			pointerCoordinates.x <= rect.current.right + threshold &&
			pointerCoordinates.y >= rect.current.top - threshold &&
			pointerCoordinates.y <= rect.current.bottom + threshold;

		if (isWithinBounds) {
			if (droppableArea[0] === 'section') {
				const nestLevel = Number(droppableArea[1]);
				if (isNaN(nestLevel)) console.error('Invalid number in droppableArea');

				return { id, nestLevel };
			}
			return { id, nestLevel: 0 };
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
		.sort((a, b) => b.nestLevel - a.nestLevel);
	if (sectionCollisions.length > 0) return [sectionCollisions[0]];

	const mainBoardCollision = validCollisions.find(collision => {
		const id = collision.id as string;
		return id.split('-')[0] === 'mainBoard';
	});
	if (mainBoardCollision) return [mainBoardCollision];

	return [];
};

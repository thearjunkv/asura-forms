import { CollisionDetection, DroppableContainer } from '@dnd-kit/core';

let threshold = 0;

export const pointerBasedCollision: CollisionDetection = ({ pointerCoordinates, droppableContainers }) => {
	if (!pointerCoordinates) return [];

	const collisions = droppableContainers.map((droppable: DroppableContainer) => {
		const { rect, id, data } = droppable;
		if (!rect.current) return null;
		if (!data.current) return null;

		const { droppableArea, nestLevel } = data.current as {
			droppableArea: 'topHalf' | 'bottomHalf' | 'section' | 'mainBoard';
			nestLevel?: number;
		};

		if (droppableArea === 'topHalf' || droppableArea === 'bottomHalf') threshold = 1;
		else threshold = 0;

		const isWithinBounds =
			pointerCoordinates.x >= rect.current.left - threshold &&
			pointerCoordinates.x <= rect.current.right + threshold &&
			pointerCoordinates.y >= rect.current.top - threshold &&
			pointerCoordinates.y <= rect.current.bottom + threshold;

		if (isWithinBounds) {
			if (droppableArea === 'section') {
				if (!nestLevel) console.error('nestLevel is missing in droppableArea');
				else if (isNaN(nestLevel)) console.error('Invalid nestLevel in droppableArea');

				return { id, droppableArea, nestLevel: nestLevel || 0 };
			}
			return { id, droppableArea, nestLevel: 0 };
		}
		return null;
	});

	const validCollisions = collisions.filter(collision => collision !== null);

	const topOrBottomHalfCollision = validCollisions.find(
		({ droppableArea }) => droppableArea === 'topHalf' || droppableArea === 'bottomHalf'
	);
	if (topOrBottomHalfCollision) return [topOrBottomHalfCollision];

	const sectionCollisions = validCollisions
		.filter(({ droppableArea }) => droppableArea === 'section')
		.sort((a, b) => b.nestLevel - a.nestLevel);
	if (sectionCollisions.length > 0) return [sectionCollisions[0]];

	const mainBoardCollision = validCollisions.find(({ droppableArea }) => droppableArea === 'mainBoard');
	if (mainBoardCollision) return [mainBoardCollision];

	return [];
};

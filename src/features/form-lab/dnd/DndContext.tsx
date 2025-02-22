import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { pointerBasedCollision } from './pointerBasedCollision';

type TDndContext = {
	children: React.ReactNode;
};

function DndContextWrapper({ children }: TDndContext) {
	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint: {
			distance: 10
		}
	});

	const sensors = useSensors(mouseSensor);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={pointerBasedCollision}
		>
			{children}
		</DndContext>
	);
}

export default DndContextWrapper;

import { DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { elements } from '../palette/data';
import { PaletteElement } from '../palette-element';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import cleanState from '../alchemy-lab/data';
import { genId } from '../../utils';

function DragOverlayWrapper() {
	const { draggedElement, setDraggedElement, setDragOver, setData } = useAlchemyLab();

	useDndMonitor({
		onDragStart: ({ active }) => {
			if (!active.data.current) return;
			const { elementId, elementType, isPaletteElement } = active.data.current;
			setDraggedElement({
				elementId,
				elementType,
				isPaletteElement
			});
		},
		onDragMove: ({ over }) => {
			if (!over) {
				setDragOver(null);
			}
			setDragOver(over);
		},
		onDragEnd: ({ active, over }) => {
			console.log(active);
			console.log(over);

			if (!active.data.current) return;
			if (!over) return;

			const { isPaletteElement, elementType } = active.data.current;
			if (isPaletteElement) {
				const element = cleanState.find(el => el.elementType === elementType);
				if (!element) return;

				setData(p => [...p, { ...element, uid: genId() }]);
			}

			setDraggedElement(null);
			setDragOver(null);
		},
		onDragCancel: () => {
			setDraggedElement(null);
			setDragOver(null);
		}
	});

	if (draggedElement) {
		const { elementType, isPaletteElement } = draggedElement;
		if (!isPaletteElement) return null;

		const element = elements.find(e => e.element === elementType);
		if (!element) return null;

		return (
			<DragOverlay>
				<PaletteElement {...element} />
			</DragOverlay>
		);
	}

	return null;
}

export default DragOverlayWrapper;

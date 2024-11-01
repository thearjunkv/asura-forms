import { DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { elements } from '../palette/data';
import { PaletteElement } from '../palette-element';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import CompileJsx from '../compile-jsx';
import { findElement } from '../../utils';

function DragOverlayWrapper() {
	const { data, draggedElement, setDraggedElement } = useAlchemyLab();

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
		onDragEnd: () => {
			setDraggedElement(null);
		},
		onDragCancel: () => {
			setDraggedElement(null);
		}
	});

	if (draggedElement) {
		const { elementId, elementType, isPaletteElement } = draggedElement;
		if (isPaletteElement) {
			const element = elements.find(e => e.element === elementType);
			if (!element) return null;

			return (
				<DragOverlay>
					<PaletteElement {...element} />
				</DragOverlay>
			);
		} else {
			const element = findElement(data, elementId);
			if (!element) return;
			return (
				<DragOverlay>
					<CompileJsx
						element={element}
						isOverlay={true}
					/>
				</DragOverlay>
			);
		}
	}

	return null;
}

export default DragOverlayWrapper;

import { DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { elements } from '../palette/data';
import { PaletteElement } from '../palette-element';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import cleanState from '../alchemy-lab/data';
import { genId } from '../../utils';
import CompileJsx from '../compile-jsx';

function DragOverlayWrapper() {
	const { data, draggedElement, setDraggedElement, setDraggedOver, setData } = useAlchemyLab();

	useDndMonitor({
		onDragStart: ({ active }) => {
			if (!active.data.current) return;
			const { elementType, isPaletteElement } = active.data.current;
			setDraggedElement({
				elementId: active.id as string,
				elementType,
				isPaletteElement
			});
		},
		onDragMove: ({ over }) => {
			console.log(over);
			setDraggedOver(over);
		},
		onDragEnd: ({ active, over }) => {
			setDraggedElement(null);
			setDraggedOver(null);

			if (!active.data.current) return;
			if (!over) return;

			const { isPaletteElement, elementType } = active.data.current;
			if (isPaletteElement) {
				const element = cleanState.find(el => el.elementType === elementType);
				if (!element) return;

				setData(p => [...p, { ...element, uid: genId() }]);
			}
		},
		onDragCancel: () => {
			setDraggedElement(null);
			setDraggedOver(null);
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
			const element = data.find(e => e.uid === elementId);
			if (!element) return;
			return (
				<DragOverlay>
					<CompileJsx element={element} />
				</DragOverlay>
			);
		}
	}

	return null;
}

export default DragOverlayWrapper;

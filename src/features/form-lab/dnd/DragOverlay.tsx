import { DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { paletteElementDataList } from '../data/paletteElementDataList';
import { findElement } from '../utils/elementHelpers';
import PaletteElement from '../components/PaletteElement';
import BoardElement from '../components/BoardElement';
import { useFormLab } from '../hooks/useFormLab';
import { Form } from 'antd';

function DragOverlayWrapper() {
	const { formData, draggedElement, setDraggedElement } = useFormLab();

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
			const element = paletteElementDataList.find(e => e.name === elementType);
			if (!element) return null;

			return (
				<DragOverlay>
					<PaletteElement
						icon={element.icon}
						text={element.text}
						isOverlay={true}
					/>
				</DragOverlay>
			);
		} else {
			const element = findElement(formData, elementId);
			if (!element) return;
			return (
				<DragOverlay>
					<Form layout='vertical'>
						<BoardElement
							element={element}
							isOverlay={true}
							nestLevel={0}
						/>
					</Form>
				</DragOverlay>
			);
		}
	}

	return null;
}

export default DragOverlayWrapper;

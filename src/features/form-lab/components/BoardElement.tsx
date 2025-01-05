import { useDroppable } from '@dnd-kit/core';
import { useFormLab } from '../hooks/useFormLab';
import { DeleteIcon, SpacerIcon } from '../../../assets/Icons';
import { clone, cn } from '../../../utils/helpers';
import { CompileJsx, CompileSectionJsx } from '../../../components/compile-jsx';
import { remove } from '../utils/elementHelpers';
import { StyledBoardElement } from '../styles/boardElementStyles';
import Draggable from '../dnd/Draggable';
import { Element } from '../../../types/Element';

type TBoardElement = {
	element: Element;
	isOverlay?: boolean;
	nestLevel: number;
};

const BoardElement: React.FC<TBoardElement> = ({ element, isOverlay, nestLevel }) => {
	const {
		formData,
		setFormData,
		draggedElement,
		selectedElement,
		setSelectedElement,
		invalidElementProperties,
		setInvalidElementProperties
	} = useFormLab();
	const { elementId, elementType, sectionId } = element;

	const sectionDroppable = useDroppable({
		id: `section-${elementId}`,
		data: {
			droppableArea: 'section',
			nestLevel,
			elementId
		}
	});

	const topHalfDroppable = useDroppable({
		id: `topHalf-${elementId}`,
		data: {
			droppableArea: 'topHalf',
			elementId,
			sectionId
		}
	});
	const bottomHalfDroppable = useDroppable({
		id: `bottomHalf-${elementId}`,
		data: {
			droppableArea: 'bottomHalf',
			elementId,
			sectionId
		}
	});

	const boardElementBody = (
		<>
			{elementType === 'Spacer' && (
				<div className='asura-forms__board-element-spacer-info'>
					<div>{SpacerIcon}</div>
					<span>Spacer Field {element.height}px</span>
				</div>
			)}

			{elementType === 'Section' && (
				<>
					<div className='asura-forms__board-element-section-info'>
						<span>Section Field</span>
					</div>
					<CompileSectionJsx element={element}>
						{element.children.map(childElement => (
							<BoardElement
								key={childElement.elementId}
								element={childElement}
								isOverlay={isOverlay}
								nestLevel={nestLevel + 1}
							/>
						))}
					</CompileSectionJsx>
				</>
			)}

			{elementType !== 'Section' && elementType !== 'Spacer' && <CompileJsx element={element} />}
		</>
	);

	const topHalfDropArea = (
		<div
			ref={topHalfDroppable.setNodeRef}
			className={cn(
				'asura-forms__board-element-top-half',
				topHalfDroppable.isOver && 'asura-forms__board-element-top-half--drag-over'
			)}
		/>
	);

	const bottomHalfDropArea = (
		<div
			ref={bottomHalfDroppable.setNodeRef}
			className={cn(
				'asura-forms__board-element-bottom-half',
				bottomHalfDroppable.isOver && 'asura-forms__board-element-bottom-half--drag-over'
			)}
		/>
	);

	const deleteBtn = (
		<button
			className={cn(
				'asura-forms__board-element-btn-delete',
				elementType === 'Section' && 'asura-forms__board-element-btn-delete--section'
			)}
			onClick={e => {
				e.stopPropagation();

				const clonedFormData = clone(formData);
				const result = remove({ formData: clonedFormData, elementId });
				if (!result) return;
				setFormData(result.updatedFormData);

				if (!selectedElement) return;
				if (selectedElement.elementId === elementId) {
					setSelectedElement(null);
					if (invalidElementProperties.length > 0) setInvalidElementProperties([]);
				}
			}}
		>
			{DeleteIcon}
		</button>
	);

	if (isOverlay)
		return (
			<StyledBoardElement
				className={cn(
					'asura-forms__board-element',
					'asura-forms__board-element--drag-overlay',
					elementType === 'Section' && 'asura-forms__board-element--section'
				)}
			>
				{boardElementBody}
			</StyledBoardElement>
		);

	return (
		<Draggable
			id={elementId}
			data={{ elementId, elementType, isPaletteElement: false }}
		>
			<StyledBoardElement
				{...(elementType === 'Section' ? { ref: sectionDroppable.setNodeRef } : {})}
				className={cn(
					'asura-forms__board-element',
					draggedElement?.elementId === elementId && 'asura-forms__board-element--drag-original',
					draggedElement && 'asura-forms__board-element--block-hover-effect',
					elementType === 'Section' && 'asura-forms__board-element--section',
					elementType === 'Section' &&
						sectionDroppable.isOver &&
						'asura-forms__board-element--section-drag-over',
					elementType === 'Section' &&
						element.children.length > 0 &&
						'asura-forms__board-element--section-filled'
				)}
				onClick={e => {
					e.stopPropagation();
					setSelectedElement(element);

					if (invalidElementProperties.length > 0) setInvalidElementProperties([]);
					setSelectedElement(() => JSON.parse(JSON.stringify(element)));
				}}
			>
				{boardElementBody}
				{topHalfDropArea}
				{bottomHalfDropArea}
				{deleteBtn}
			</StyledBoardElement>
		</Draggable>
	);
};

export default BoardElement;

import { useDroppable } from '@dnd-kit/core';
import { useAlchemyLab } from '../../context/useAlchemyLab';
import { StyledBoardElement } from './styles';
import { Draggable } from '../dnd/Draggable';
import { clone, cn, remove } from '../../utils';
import { DeleteIcon, SpacerIcon } from '../../assets/Icons';
import CompileJsx from '../compile-jsx';
import { TBoardElement } from '../../types';

const BoardElement: React.FC<TBoardElement> = ({ element, isOverlay, nestLevel }) => {
	const { data, setData, draggedElement } = useAlchemyLab();
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
				<div className='form-alcmst__board-element-spacer-info'>
					<div>{SpacerIcon}</div>
					<span>Spacer Field {element.height}px</span>
				</div>
			)}

			{elementType === 'Section' && (
				<>
					<div className='form-alcmst__board-element-section-info'>
						<span>Section Field</span>
					</div>
					<div>
						{element.children.map(childElement => (
							<BoardElement
								key={childElement.elementId}
								element={childElement}
								isOverlay={isOverlay}
								nestLevel={nestLevel + 1}
							/>
						))}
					</div>
				</>
			)}

			{elementType !== 'Section' && elementType !== 'Spacer' && <CompileJsx element={element} />}
		</>
	);

	const topHalfDropArea = (
		<div
			ref={topHalfDroppable.setNodeRef}
			className={cn(
				'form-alcmst__board-element-top-half',
				topHalfDroppable.isOver && 'form-alcmst__board-element-top-half--drag-over'
			)}
		/>
	);

	const bottomHalfDropArea = (
		<div
			ref={bottomHalfDroppable.setNodeRef}
			className={cn(
				'form-alcmst__board-element-bottom-half',
				bottomHalfDroppable.isOver && 'form-alcmst__board-element-bottom-half--drag-over'
			)}
		/>
	);

	const deleteBtn = (
		<button
			className={cn(
				'form-alcmst__board-element-btn-delete',
				elementType === 'Section' && 'form-alcmst__board-element-btn-delete--section'
			)}
			onClick={() => {
				const clonedData = clone(data);
				const result = remove({ data: clonedData, elementId });
				if (!result) return;
				setData(result.updatedData);
			}}
		>
			{DeleteIcon}
		</button>
	);

	if (isOverlay)
		return (
			<StyledBoardElement
				className={cn(
					'form-alcmst__board-element',
					'form-alcmst__board-element--drag-overlay',
					elementType === 'Section' && 'form-alcmst__board-element--section'
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
					'form-alcmst__board-element',
					draggedElement?.elementId === elementId && 'form-alcmst__board-element--drag-original',
					draggedElement && 'form-alcmst__board-element--block-hover-effect',
					elementType === 'Section' && 'form-alcmst__board-element--section',
					elementType === 'Section' &&
						sectionDroppable.isOver &&
						'form-alcmst__board-element--section-drag-over'
				)}
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

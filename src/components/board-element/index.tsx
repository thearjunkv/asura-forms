import { useDroppable } from '@dnd-kit/core';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { StyledBoardElement } from './styles';
import { TBoardElement } from './types';
import { Draggable } from '../dnd/Draggable';
import { clone, cn, remove } from '../../utils';
import { DeleteIcon, SpacerIcon } from '../../assets/Icons';
import CompileJsx from '../compile-jsx';

const BoardElement: React.FC<TBoardElement> = ({ element, isOverlay }) => {
	const { elementId, elementType, sectionId } = element;
	const { data, setData, draggedElement } = useAlchemyLab();

	const sectionDroppable = useDroppable({
		id: `section-${elementId}`,
		data: {
			elementId,
			elementType
		}
	});

	const topHalf = useDroppable({
		id: `topHalf-${elementId}`,
		data: {
			elementId,
			elementType,
			sectionId
		}
	});
	const bottomHalf = useDroppable({
		id: `bottomHalf-${elementId}`,
		data: {
			elementId,
			elementType,
			sectionId
		}
	});

	return (
		<Draggable
			elementId={elementId}
			elementType={elementType}
			isPaletteElement={false}
		>
			<StyledBoardElement
				{...(elementType === 'Section' ? { ref: sectionDroppable.setNodeRef } : {})}
				className={cn(
					'form-alcmst__board-element',
					isOverlay && 'form-alcmst__board-element--drag-overlay',
					draggedElement?.elementId === elementId &&
						!isOverlay &&
						'form-alcmst__board-element--drag-original',
					elementType === 'Section' && 'form-alcmst__board-element--section',
					sectionDroppable.isOver && 'form-alcmst__board-element--section-drag-over',
					draggedElement && 'form-alcmst__board-element--block-hover-effect'
				)}
			>
				{elementType === 'Spacer' && (
					<div className='form-alcmst__board-element-spacer-info'>
						<div>{SpacerIcon}</div>
						<span>Spacer Field {element.height}px</span>
					</div>
				)}

				{elementType === 'Section' && (
					<div className='form-alcmst__board-element-section-info'>
						<span>Section Field</span>
					</div>
				)}

				{elementType === 'Section' ? (
					<div>
						{element.children.map(childElement => (
							<BoardElement
								key={childElement.elementId}
								element={childElement}
							/>
						))}
					</div>
				) : elementType === 'Spacer' ? (
					<></>
				) : (
					<CompileJsx element={element} />
				)}

				{elementType !== 'Section' && (
					<div
						ref={topHalf.setNodeRef}
						className={cn(
							'form-alcmst__board-element-top-half',
							isOverlay && 'form-alcmst__board-element-top-half--drag-overlay',
							topHalf.isOver && 'form-alcmst__board-element-top-half--drag-over'
						)}
					/>
				)}

				{elementType !== 'Section' && (
					<div
						ref={bottomHalf.setNodeRef}
						className={cn(
							'form-alcmst__board-element-bottom-half',
							isOverlay && 'form-alcmst__board-element-bottom-half--drag-overlay',
							bottomHalf.isOver && 'form-alcmst__board-element-bottom-half--drag-over'
						)}
					/>
				)}

				<button
					className={cn(
						'form-alcmst__board-element-btn-delete',
						elementType === 'Section' && 'form-alcmst__board-element-btn-delete--section',
						isOverlay && 'form-alcmst__board-element-btn-delete--drag-overlay'
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
			</StyledBoardElement>
		</Draggable>
	);
};

export default BoardElement;

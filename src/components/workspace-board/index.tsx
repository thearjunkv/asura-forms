import { useDroppable } from '@dnd-kit/core';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { cn } from '../../utils';
import { StyledWorkspaceBoard } from './styles';
import BoardElement from '../board-element';

const WorkspaceBoard: React.FC = () => {
	const { data } = useAlchemyLab();
	const { setNodeRef, isOver } = useDroppable({
		id: 'mainBoard',
		data: {
			droppableArea: 'mainBoard'
		}
	});

	return (
		<StyledWorkspaceBoard
			ref={setNodeRef}
			className={cn(
				'form-alcmst__workspace-board',
				isOver && 'form-alcmst__workspace-board--hovered',
				data.length === 0 && 'form-alcmst__workspace-board--empty'
			)}
		>
			{data.length === 0 && <span className='form-alcmst__workspace-board-drop-message'>Drop here</span>}

			{data.map(element => (
				<BoardElement
					key={element.elementId}
					element={element}
					nestLevel={0}
				/>
			))}
		</StyledWorkspaceBoard>
	);
};

export default WorkspaceBoard;

import { useDroppable } from '@dnd-kit/core';
import { useAlchemyLab } from '../hooks/useAlchemyLab';
import { StyledWorkspaceBoard } from '../styles/workspaceBoardStyles';
import { BoardElement } from './BoardElement';
import { cn } from '../../../utils/helpers';

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
				isOver && 'form-alcmst__workspace-board--drag-over',
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

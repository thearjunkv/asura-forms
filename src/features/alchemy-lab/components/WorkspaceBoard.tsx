import { useDroppable } from '@dnd-kit/core';
import { useAlchemyLab } from '../hooks/useAlchemyLab';
import { StyledWorkspaceBoard } from '../styles/workspaceBoardStyles';
import BoardElement from './BoardElement';
import { cn } from '../../../utils/helpers';
import { Form } from 'antd';

const WorkspaceBoard: React.FC = () => {
	const { formData } = useAlchemyLab();
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
				formData.length === 0 && 'form-alcmst__workspace-board--empty'
			)}
		>
			{formData.length === 0 && <span className='form-alcmst__workspace-board-drop-message'>Drop here</span>}

			<Form layout='vertical'>
				{formData.map(element => (
					<BoardElement
						key={element.elementId}
						element={element}
						nestLevel={0}
					/>
				))}
			</Form>
		</StyledWorkspaceBoard>
	);
};

export default WorkspaceBoard;

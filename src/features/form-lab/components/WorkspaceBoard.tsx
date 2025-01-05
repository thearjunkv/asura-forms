import { useDroppable } from '@dnd-kit/core';
import { useFormLab } from '../hooks/useFormLab';
import { StyledWorkspaceBoard } from '../styles/workspaceBoardStyles';
import BoardElement from './BoardElement';
import { cn } from '../../../utils/helpers';
import { Form } from 'antd';

const WorkspaceBoard: React.FC = () => {
	const { formData } = useFormLab();
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
				'asura-forms__workspace-board',
				isOver && 'asura-forms__workspace-board--drag-over',
				formData.length === 0 && 'asura-forms__workspace-board--empty'
			)}
		>
			{formData.length === 0 && <span className='asura-forms__workspace-board-drop-message'>Drop here</span>}

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

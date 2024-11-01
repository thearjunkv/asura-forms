import { useDroppable } from '@dnd-kit/core';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { cn } from '../../utils';
import CompileJsx from '../compile-jsx';
import { StyledWorkspaceBoard } from './styles';

const WorkspaceBoard: React.FC = () => {
	const { data } = useAlchemyLab();
	const { setNodeRef, isOver } = useDroppable({
		id: 'mainBoard'
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
				<CompileJsx
					key={element.elementId}
					element={element}
				/>
			))}
		</StyledWorkspaceBoard>
	);
};

export default WorkspaceBoard;

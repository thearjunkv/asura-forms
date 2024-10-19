import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { Droppable } from '../dnd/Droppable';
import { StyledWorkspace } from './styles';

const Workspace: React.FC = () => {
	const { dragOver, data } = useAlchemyLab();
	return (
		<StyledWorkspace className='form-alcmst__workspace'>
			<Droppable
				id='main-board'
				elementId='main-board'
			>
				<div
					className={`form-alcmst__workspace-board${
						dragOver?.id === 'main-board' ? ' form-alcmst__workspace-board--hovered' : ''
					}${data.length === 0 ? ' form-alcmst__workspace-board--empty' : ''}`}
				>
					{data.length === 0 ? <span>Drop here</span> : ''}
				</div>
			</Droppable>
		</StyledWorkspace>
	);
};

export default Workspace;

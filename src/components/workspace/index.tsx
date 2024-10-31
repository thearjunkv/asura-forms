import WorkspaceBoard from '../workspace-board';
import { StyledWorkspace } from './styles';

const Workspace: React.FC = () => {
	return (
		<StyledWorkspace className='form-alcmst__workspace'>
			<WorkspaceBoard />
		</StyledWorkspace>
	);
};

export default Workspace;

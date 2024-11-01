import { useDndMonitor } from '@dnd-kit/core';
import WorkspaceBoard from '../workspace-board';
import { StyledWorkspace } from './styles';
import cleanState from '../alchemy-lab/data';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { drop } from '../../utils';

const Workspace: React.FC = () => {
	const { data, setData } = useAlchemyLab();
	useDndMonitor({
		onDragEnd: ({ active, over }) => {
			if (!active.data.current) return;
			if (!over) return;

			const { elementId, elementType, isPaletteElement } = active.data.current;
			if (isPaletteElement) {
				let targetElementId: string = '';
				let targetSectionId: string = '';
				let position: 'up' | 'down' = 'up';

				const overId = (over.id as string).split('-')[0];

				if (overId === 'mainBoard') targetSectionId = overId;
				else {
					if (!over.data.current) return;
					if (overId === 'section') targetSectionId = over.data.current.elementId;
					else if (overId === 'topHalf' || overId === 'bottomHalf') {
						targetSectionId = over.data.current.sectionId;
						targetElementId = over.data.current.elementId;
					}
				}

				if (overId === 'topHalf') position = 'up';
				else position = 'down';

				const element = cleanState.find(el => el.elementType === elementType);
				if (!element) return;

				const updatedData = drop({ data, element, position, targetElementId, targetSectionId });
				if (!updatedData) return;

				setData(updatedData);
			}
		}
	});
	return (
		<StyledWorkspace className='form-alcmst__workspace'>
			<WorkspaceBoard />
		</StyledWorkspace>
	);
};

export default Workspace;

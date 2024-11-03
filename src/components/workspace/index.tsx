import { useDndMonitor } from '@dnd-kit/core';
import WorkspaceBoard from '../workspace-board';
import { StyledWorkspace } from './styles';
import cleanState from '../alchemy-lab/data';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { clone, drop, genId, reorder } from '../../utils';
import { Element } from '../../types';

const Workspace: React.FC = () => {
	const { data, setData } = useAlchemyLab();

	useDndMonitor({
		onDragEnd: ({ active, over }) => {
			if (!active.data.current) return;
			if (!over) return;

			const { elementId, elementType, isPaletteElement } = active.data.current;

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

			if (elementId === targetElementId) return; // same element
			if (elementId === targetSectionId) return; // same section

			if (overId === 'topHalf') position = 'up';
			else position = 'down';

			const clonedData = clone(data) as Element[];
			if (isPaletteElement) {
				const element = cleanState.find(el => el.elementType === elementType);
				if (!element) return;

				const clonedElement = clone(element) as Element;

				const updatedData = drop({
					data: clonedData,
					element: { ...clonedElement, elementId: genId(), sectionId: targetSectionId },
					position,
					targetElementId,
					targetSectionId
				});
				if (!updatedData) return;
				setData(updatedData);
			} else {
				const updatedData = reorder({
					data: clonedData,
					elementId,
					targetElementId,
					targetSectionId,
					position
				});
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

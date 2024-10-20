import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { cn } from '../../utils';
import CompileJsx from '../compile-jsx';
import { Droppable } from '../dnd/Droppable';
import { StyledWorkspace } from './styles';

const Workspace: React.FC = () => {
	const { draggedOver, draggedElement, data } = useAlchemyLab();

	return (
		<StyledWorkspace className='form-alcmst__workspace'>
			<Droppable id='main-board'>
				<div
					className={cn(
						'form-alcmst__workspace-board',
						draggedOver?.id === 'main-board' &&
							draggedElement?.isPaletteElement &&
							'form-alcmst__workspace-board--hovered',
						data.length === 0 && ' form-alcmst__workspace-board--empty'
					)}
				>
					{data.length === 0 ? <span>Drop here</span> : ''}

					{data.map(element => (
						<CompileJsx
							key={element.uid}
							element={element}
						/>
					))}
				</div>
			</Droppable>
		</StyledWorkspace>
	);
};

export default Workspace;

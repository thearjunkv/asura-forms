import { useState } from 'react';
import { AlchemyLabProps } from './types';
import { StyledAlchemyLab } from './styles';
import { Element } from '../../types';
import { PreviewIcon, SaveIcon } from '../../assets/Icons';
import { DndContextWrapper } from '../dnd/DndContext';
import Properties from '../properties';
import Palette from '../palette';
import Workspace from '../workspace';
import GlobalStyle from '../../styles';
import DragOverlayWrapper from '../dnd/DragOverlay';

const AlchemyLab: React.FC<AlchemyLabProps> = props => {
	const [data, setData] = useState<Element[]>(() => props.data || []);

	return (
		<>
			<GlobalStyle />
			<StyledAlchemyLab
				className='form-alcmst__alchemy-lab'
				height={props.height}
			>
				<div className='form-alcmst__alchemy-lab-header'>
					<h1>
						Form: <span>{props.title || 'Custom Form'}</span>
					</h1>
					<div>
						<button>{PreviewIcon}Preview</button>
						<button>{SaveIcon}Save</button>
					</div>
				</div>

				<div className='form-alcmst__alchemy-lab-body'>
					<DndContextWrapper>
						<Palette gridView={props.paletteGridView} />
						<div className='form-alcmst__workspace-wrapper'>
							<Workspace />
						</div>
						<DragOverlayWrapper />
					</DndContextWrapper>
					<Properties />
				</div>
			</StyledAlchemyLab>
		</>
	);
};

export default AlchemyLab;

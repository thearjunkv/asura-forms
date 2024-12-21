import { GlobalStyles } from '../styles/globalStyles';
import { StyledAlchemyLab } from './styles/alchemyLabStyles';

import Palette from './components/Palette';
import Workspace from './components/Workspace';
import Properties from './components/Properties';

import { TAlchemyLab } from './types';
import { PreviewIcon, SaveIcon } from '../assets/Icons';

import { DndContextWrapper } from './dnd/DndContext';
import DragOverlayWrapper from './dnd/DragOverlay';
import { AlchemyLabProvider } from './context/AlchemyLabProvider';
import { Theme } from '../styles/Theme';

export const AlchemyLab: React.FC<TAlchemyLab> = props => {
	return (
		<AlchemyLabProvider>
			<Theme>
				<GlobalStyles>
					<StyledAlchemyLab
						className='form-alcmst__alchemy-lab'
						style={{ height: props.height ? `${props.height}px` : '650px' }}
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
								<Palette />
								<Workspace />
								<DragOverlayWrapper />
							</DndContextWrapper>
							<Properties />
						</div>
					</StyledAlchemyLab>
				</GlobalStyles>
			</Theme>
		</AlchemyLabProvider>
	);
};

import { useState } from 'react';
import { GlobalStyles } from '../../styles/globalStyles';
import { StyledAlchemyLab } from './styles/alchemyLabStyles';

import Palette from './components/Palette';
import Workspace from './components/Workspace';
import Properties from './components/Properties';

import { TAlchemyLab } from './types';

import DndContextWrapper from './dnd/DndContext';
import DragOverlayWrapper from './dnd/DragOverlay';
import AlchemyLabProvider from './context/AlchemyLabProvider';
import { Theme } from '../../styles/Theme';
import Preview from './components/Preview';

const AlchemyLab: React.FC<TAlchemyLab> = ({ title, height }) => {
	const [togglePreview, setTogglePreview] = useState<boolean>(false);
	const formTitle = title || 'Custom Form';

	return (
		<AlchemyLabProvider>
			<Theme>
				<GlobalStyles>
					<StyledAlchemyLab
						className='form-alcmst__alchemy-lab'
						style={{ height: height ? `${height}px` : '650px' }}
					>
						<Preview
							formTitle={formTitle}
							isOpen={togglePreview}
							onClose={() => setTogglePreview(false)}
						/>
						<div className='form-alcmst__alchemy-lab-header'>
							<h1>
								Form: <span>{formTitle}</span>
							</h1>
							<div>
								<button
									className='form-alcmst__btn--secondary'
									onClick={() => setTogglePreview(true)}
								>
									Preview
								</button>
								<button className='form-alcmst__btn'>Save</button>
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

export default AlchemyLab;

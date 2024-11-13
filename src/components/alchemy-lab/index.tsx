import { useEffect, useState } from 'react';
import { StyledAlchemyLab } from './styles';
import { Element, TAlchemyLab } from '../../types';
import { PreviewIcon, SaveIcon } from '../../assets/Icons';
import { DndContextWrapper } from '../dnd/DndContext';
import Properties from '../properties';
import Palette from '../palette';
import Workspace from '../workspace';
import { GlobalStyles } from '../../styles';
import DragOverlayWrapper from '../dnd/DragOverlay';
import { useAlchemyLab } from '../../context/useAlchemyLab';

const AlchemyLab: React.FC<TAlchemyLab> = props => {
	const [data, setData] = useState<Element[]>(() => props.data || []);
	const { setPaletteGridView } = useAlchemyLab();

	useEffect(() => {
		setPaletteGridView(!!props.paletteGridView);
	}, [props.paletteGridView, setPaletteGridView]);

	return (
		<>
			<GlobalStyles />
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
						<Palette />
						<Workspace />
						<DragOverlayWrapper />
					</DndContextWrapper>
					<Properties />
				</div>
			</StyledAlchemyLab>
		</>
	);
};

export default AlchemyLab;

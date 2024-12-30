import { layoutElementDataList, formElementDataList } from '../data/paletteElementDataList';
import Draggable from '../dnd/Draggable';
import { cn } from '../../../utils/helpers';
import { StyledPalette } from '../styles/paletteStyles';
import PaletteElement from './PaletteElement';

type TPalette = { paletteGridView?: boolean };

const Palette: React.FC<TPalette> = ({ paletteGridView }) => {
	return (
		<StyledPalette className={cn('form-alcmst__palette', paletteGridView && 'form-alcmst__palette--grid-view')}>
			<h2>Layout Elements</h2>
			<div>
				{layoutElementDataList.map(({ name, text, icon }) => (
					<Draggable
						key={name}
						id={name}
						data={{ elementId: name, elementType: name, isPaletteElement: true }}
					>
						<PaletteElement
							icon={icon}
							text={text}
							paletteGridView={paletteGridView}
						/>
					</Draggable>
				))}
			</div>
			<h2>Form Elements</h2>
			<div>
				{formElementDataList.map(({ name, text, icon }) => (
					<Draggable
						key={name}
						id={name}
						data={{ elementId: name, elementType: name, isPaletteElement: true }}
					>
						<PaletteElement
							icon={icon}
							text={text}
							paletteGridView={paletteGridView}
						/>
					</Draggable>
				))}
			</div>
		</StyledPalette>
	);
};

export default Palette;

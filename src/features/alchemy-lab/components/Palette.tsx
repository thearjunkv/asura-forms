import { formElements, layoutElements } from '../../../data/paletteElements';
import { Draggable } from '../dnd/Draggable';
import { cn } from '../../../utils/helpers';
import { StyledPalette } from '../styles/paletteStyles';
import { TPalette } from '../types';
import { PaletteElement } from './PaletteElement';

const Palette: React.FC<TPalette> = ({ paletteGridView }) => {
	return (
		<StyledPalette className={cn('form-alcmst__palette', paletteGridView && 'form-alcmst__palette--grid-view')}>
			<h2>Layout Elements</h2>
			<div>
				{layoutElements.map(({ name, text, icon }) => (
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
				{formElements.map(({ name, text, icon }) => (
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

import { formElements, layoutElements } from './data';
import { StyledPalette } from './styles';
import { PaletteElement } from '../palette-element';
import { Draggable } from '../dnd/Draggable';
import { cn } from '../../utils';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';

const Palette: React.FC = () => {
	const { paletteGridView } = useAlchemyLab();
	return (
		<StyledPalette className={cn('form-alcmst__palette', paletteGridView && 'form-alcmst__palette--grid-view')}>
			<h2>Layout Elements</h2>
			<div>
				{layoutElements.map(el => (
					<Draggable
						key={el.element}
						elementId={el.element}
						elementType={el.element}
						isPaletteElement={true}
					>
						<PaletteElement {...el} />
					</Draggable>
				))}
			</div>
			<h2>Form Elements</h2>
			<div>
				{formElements.map(el => (
					<Draggable
						key={el.element}
						elementId={el.element}
						elementType={el.element}
						isPaletteElement={true}
					>
						<PaletteElement {...el} />
					</Draggable>
				))}
			</div>
		</StyledPalette>
	);
};

export default Palette;

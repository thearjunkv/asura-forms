import { formElements, layoutElements } from './data';
import { StyledPalette } from './styles';
import { PaletteElement } from '../palette-element';
import { Draggable } from '../dnd/Draggable';
import { TPalette } from './types';

const Palette: React.FC<TPalette> = props => {
	return (
		<StyledPalette className={`form-alcmst__palette${props.gridView ? ' form-alcmst__palette--grid-layout' : ''}`}>
			<h2>Layout Elements</h2>
			<div>
				{layoutElements.map(el => (
					<Draggable
						key={el.element}
						id={el.element}
						elementType={el.element}
						isPaletteElement={true}
					>
						<PaletteElement
							{...el}
							gridView={props.gridView}
						/>
					</Draggable>
				))}
			</div>
			<h2>Form Elements</h2>
			<div>
				{formElements.map(el => (
					<Draggable
						key={el.element}
						id={el.element}
						elementType={el.element}
						isPaletteElement={true}
					>
						<PaletteElement
							{...el}
							gridView={props.gridView}
						/>
					</Draggable>
				))}
			</div>
		</StyledPalette>
	);
};

export default Palette;

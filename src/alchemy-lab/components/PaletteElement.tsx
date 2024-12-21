import { cn } from '../../utils/helpers';
import { StyledPaletteElement } from '../styles/paletteElementStyles';
import { TPaletteElement } from '../types';

export const PaletteElement: React.FC<TPaletteElement> = ({ icon, text, paletteGridView }) => {
	return (
		<StyledPaletteElement
			className={cn(
				'form-alcmst__palette-element',
				paletteGridView && 'form-alcmst__palette-element--vertical-card'
			)}
		>
			<div>{icon}</div>
			<span>{text}</span>
		</StyledPaletteElement>
	);
};

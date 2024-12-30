import { cn } from '../../../utils/helpers';
import { StyledPaletteElement } from '../styles/paletteElementStyles';

type TPaletteElement = { text: string; icon: JSX.Element; paletteGridView?: boolean; isOverlay?: boolean };

const PaletteElement: React.FC<TPaletteElement> = ({ icon, text, paletteGridView, isOverlay }) => {
	return (
		<StyledPaletteElement
			className={cn(
				'form-alcmst__palette-element',
				paletteGridView && 'form-alcmst__palette-element--vertical-card',
				isOverlay && 'form-alcmst__palette-element--drag-overlay'
			)}
		>
			<div>{icon}</div>
			<span>{text}</span>
		</StyledPaletteElement>
	);
};

export default PaletteElement;

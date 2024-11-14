import { useAlchemyLab } from '../../hooks/useAlchemyLab';
import { cn } from '../../utils';
import { TPaletteElement } from '../../types';
import { StyledPaletteElement } from './styles';

export const PaletteElement: React.FC<TPaletteElement> = ({ icon, text }) => {
	const { paletteGridView } = useAlchemyLab();

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

import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { cn } from '../../utils';
import { StyledPaletteElement } from './styles';

export const PaletteElement: React.FC<{ icon: JSX.Element; text: string }> = ({ icon, text }) => {
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

import { cn } from '../../utils';
import { StyledPaletteElement } from './styles';

export const PaletteElement: React.FC<{ icon: JSX.Element; text: string; gridView?: boolean }> = ({
	icon,
	text,
	gridView
}) => {
	return (
		<StyledPaletteElement
			className={cn('form-alcmst__palette-element', gridView && 'form-alcmst__palette-element--grid-layout')}
		>
			<div>{icon}</div>
			<span>{text}</span>
		</StyledPaletteElement>
	);
};

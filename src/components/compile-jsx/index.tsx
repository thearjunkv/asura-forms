import { Draggable } from '../dnd/Draggable';
import { Droppable } from '../dnd/Droppable';
import { StyledCompileJsx } from './styles';
import { TCompileJsx } from './types';

const CompileJsx: React.FC<TCompileJsx> = ({ element }) => {
	const { elementType, uid } = element;
	let jsxElement: JSX.Element;

	if (element.elementType === 'Name')
		jsxElement = (
			<div className='form-alcmst__board-element'>
				<div className='form-alcmst__element-wrapper'>
					<label>{element.label}</label>
					<input type='text' />
				</div>
			</div>
		);
	else jsxElement = <></>;

	return (
		<Draggable
			id={uid}
			elementType={elementType}
			isPaletteElement={false}
		>
			<Droppable id={uid}>
				<StyledCompileJsx>{jsxElement}</StyledCompileJsx>
			</Droppable>
		</Draggable>
	);
};

export default CompileJsx;

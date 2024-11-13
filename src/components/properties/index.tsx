import { useState } from 'react';
import { StyledProperties } from './styles';
import { TProperties } from '../../types';

const Properties: React.FC<TProperties> = props => {
	const [element, setElement] = useState(props.element);
	return (
		<StyledProperties className='form-alcmst--properties'>
			<h2>Element Properties</h2>
			{element && <div></div>}
		</StyledProperties>
	);
};

export default Properties;

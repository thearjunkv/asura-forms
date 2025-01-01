import AlchemyLab from './AlchemyLab';
import AlchemyLabProvider from './context/AlchemyLabProvider';
import { TAlchemyLab } from './types';

const AlchemyLabWithContext: React.FC<TAlchemyLab> = props => {
	return (
		<AlchemyLabProvider>
			<AlchemyLab {...props} />
		</AlchemyLabProvider>
	);
};

export default AlchemyLabWithContext;

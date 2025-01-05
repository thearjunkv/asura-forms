import FormLab from './FormLab';
import FormLabProvider from './context/FormLabProvider';
import { TFormLab } from './types';

const FormLabWithContext: React.FC<TFormLab> = props => {
	return (
		<FormLabProvider>
			<FormLab {...props} />
		</FormLabProvider>
	);
};

export default FormLabWithContext;

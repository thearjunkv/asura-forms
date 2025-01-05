import { useContext } from 'react';
import { FormLabContext } from '../context/FormLabContext';

export const useFormLab = () => {
	const context = useContext(FormLabContext);
	if (!context) {
		throw new Error('useFormLab must be used within an FormLabProvider');
	}
	return context;
};

import { useContext } from 'react';
import { AlchemyLabContext } from '../context/AlchemyLabContext';

export const useAlchemyLab = () => {
    const context = useContext(AlchemyLabContext);
    if (!context) {
        throw new Error('useAlchemyLab must be used within an AlchemyLabProvider');
    }
    return context;
};

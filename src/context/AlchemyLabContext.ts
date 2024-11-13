import { createContext } from 'react';
import { TAlchemyLabContext } from '../types';

export const AlchemyLabContext = createContext<TAlchemyLabContext | null>(null);

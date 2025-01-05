import { createContext } from 'react';
import { TFormLabContext } from '../types';

export const FormLabContext = createContext<TFormLabContext | null>(null);

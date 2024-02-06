import { createContext } from 'react';
import { DocumentContextProps } from './documentContext.types'

export const DocumentContext = createContext<DocumentContextProps>({} as DocumentContextProps);
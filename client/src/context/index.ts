import { createContext } from 'react';

import { IContextValue } from './types';

export const Context = createContext<IContextValue>({ userId: -1, setUserId: () => undefined });

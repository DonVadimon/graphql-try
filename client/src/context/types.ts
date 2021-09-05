import React, { SetStateAction } from 'react';

export interface IContextValue {
    userId: number;
    setUserId: React.Dispatch<SetStateAction<number>>;
}

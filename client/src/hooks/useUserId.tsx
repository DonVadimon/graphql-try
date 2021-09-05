import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getCookie } from 'tools/getCookie';

export const useUserId = (): [userId: number, setUserId: Dispatch<SetStateAction<number>>] => {
    const [userId, setUserId] = useState(-1);

    useEffect(() => {
        setUserId(() => Number(getCookie('login')) || -1);
    }, []);

    return [userId, setUserId];
};

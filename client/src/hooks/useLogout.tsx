import { useCallback, useContext } from 'react';
import { useHistory } from 'react-router';
import { Context } from 'context';
import { setCookie } from 'tools/setCookie';

export const useLogout = () => {
    const history = useHistory();

    const { setUserId } = useContext(Context);

    const logout = useCallback(() => {
        setCookie('login', '-1');
        history.push('/');
        setUserId(-1);
    }, [history, setUserId]);

    return logout;
};

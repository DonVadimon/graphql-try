import React, { useCallback, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { Context } from 'context';
import { FormApi } from 'final-form';
import { LOGIN } from 'GraphQl/mutations/user';
import { setCookie } from 'tools/setCookie';
import { IUser, LoginInput } from 'types/User.types';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Spinner } from 'components/Spinner';

import { Container, FormItem } from './LoginForm.styles';

const initialValues: LoginInput = {
    username: '',
    password: '',
};

export const LoginForm = () => {
    const [login, { error, loading }] = useMutation<{ login: IUser }, { input: LoginInput }>(LOGIN);

    const { setUserId } = useContext(Context);

    const history = useHistory();

    const handleSubmit = useCallback(
        (values: LoginInput, form: FormApi<LoginInput, LoginInput>) => {
            login({
                variables: {
                    input: values,
                },
            })
                .then((data) => {
                    if (data.data?.login && !error) {
                        setCookie('login', data.data?.login.id.toString());
                        setUserId(Number(data.data?.login.id.toString()));
                    }
                    return Number(data.data?.login.id);
                })
                .then((id) => history.push(`/user/${id}`))
                .catch((err) => {
                    form.reset();
                    console.error(err);
                });
        },
        [error, history, login, setUserId],
    );

    return loading ? (
        <Spinner />
    ) : (
        <Form initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleSubmit }) => (
                <Container>
                    <FormItem>
                        <Field<string> name="username">
                            {({ input, meta }) => (
                                <Input
                                    type="text"
                                    placeholder="Username"
                                    autoComplete="off"
                                    {...input}
                                    error={!!meta.error}
                                />
                            )}
                        </Field>
                    </FormItem>
                    <FormItem>
                        <Field<string> name="password">
                            {({ input, meta }) => (
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    {...input}
                                    error={!!meta.error}
                                />
                            )}
                        </Field>
                    </FormItem>
                    <FormItem>
                        <Button onClick={handleSubmit}>Login</Button>
                    </FormItem>
                </Container>
            )}
        </Form>
    );
};

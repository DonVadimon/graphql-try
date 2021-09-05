import React, { useCallback, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { Context } from 'context';
import { FormApi } from 'final-form';
import { LOGIN } from 'GraphQl/mutations/user';
import { setCookie } from 'tools/setCookie';
import { IUser, LoginInput } from 'types/User.types';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { Container, FormItem } from './LoginForm.styles';

const initialValues: LoginInput = {
    username: '',
    password: '',
};

export const LoginForm = () => {
    const [login, { error }] = useMutation<{ login: IUser }, { input: LoginInput }>(LOGIN);

    const { setUserId } = useContext(Context);

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
                })
                .then(() => form.reset())
                .catch((err) => console.error(err));
        },
        [error, login, setUserId],
    );

    return (
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

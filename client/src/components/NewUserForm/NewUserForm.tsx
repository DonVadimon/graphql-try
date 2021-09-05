import React, { useCallback, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { Context } from 'context';
import { FormApi } from 'final-form';
import { CREATE_USER } from 'GraphQl/mutations/user';
import { setCookie } from 'tools/setCookie';
import { IUser } from 'types/User.types';

import { Avatar } from 'components/Avatar';
import { Button } from 'components/Button';
import { Counter } from 'components/Counter';
import { Input } from 'components/Input';

import { FormItem, StyledForm } from './NewUserForm.styles';
import { NewUserFormValues } from './NewUserForm.types';

const initialValues: NewUserFormValues = {
    username: '',
    password: '',
    password2: '',
    age: 18,
    avatar: '',
};

const IMG_LINK_REGEX = /^http(s)?:\/\/.+\..*$/gm;

export const NewUserForm = () => {
    const validateText = useCallback((value: string) => (value ? undefined : 'error'), []);

    const validateAge = useCallback((value: number) => (value < 18 ? 'error' : undefined), []);

    const validateImg = useCallback(
        (value: string) => (value && value.match(IMG_LINK_REGEX) ? undefined : 'error'),
        [],
    );

    const [newUser, { error }] = useMutation<{ createUser: Pick<IUser, 'id'> }>(CREATE_USER);

    const { setUserId } = useContext(Context);

    const history = useHistory();

    const registerUser = useCallback(
        (
            { username, password, avatar, age }: NewUserFormValues,
            form: FormApi<NewUserFormValues, Partial<NewUserFormValues>>,
        ) => {
            newUser({
                variables: {
                    input: { username, password, avatar, age },
                },
            })
                .then((data) => {
                    if (data.data?.createUser?.id && !error) {
                        setCookie('login', data.data.createUser.id.toString());
                        setUserId(Number(data.data.createUser.id.toString()));
                    }
                    return data.data?.createUser.id;
                })
                .then((id) => id && history.push(`/user/${id}`))
                .then(() => form.reset())
                .catch((err) => console.error(err));
        },
        [error, history, newUser, setUserId],
    );

    return (
        <Form<NewUserFormValues>
            onSubmit={registerUser}
            initialValues={initialValues}
            validate={(values) => (values.password !== values.password2 ? { password2: 'error' } : undefined)}
        >
            {({ handleSubmit, values: { avatar } }) => (
                <StyledForm>
                    <Field<string> name="username" validate={validateText}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Input
                                    placeholder="Username"
                                    error={!!meta.error && meta.touched}
                                    type="text"
                                    autoComplete="off"
                                    {...input}
                                />
                            </FormItem>
                        )}
                    </Field>
                    <Field<string> name="password" validate={validateText}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Input
                                    placeholder="Password"
                                    error={!!meta.error && meta.touched}
                                    type="password"
                                    autoComplete="off"
                                    {...input}
                                />
                            </FormItem>
                        )}
                    </Field>
                    <Field<string> name="password2" validate={validateText}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Input
                                    placeholder="Repeat Password"
                                    error={!!meta.error && meta.touched}
                                    type="password"
                                    autoComplete="off"
                                    {...input}
                                />
                            </FormItem>
                        )}
                    </Field>
                    <Field<number> name="age" validate={validateAge}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Counter
                                    onMinusClick={() => input.onChange(input.value - 1)}
                                    onPlusClick={() => input.onChange(input.value + 1)}
                                    value={input.value}
                                    error={!!meta.error}
                                />
                            </FormItem>
                        )}
                    </Field>
                    <Field<string> name="avatar" validate={validateImg}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Input
                                    placeholder="Avatar Link"
                                    error={!!meta.error && meta.touched}
                                    type="text"
                                    autoComplete="off"
                                    {...input}
                                />
                            </FormItem>
                        )}
                    </Field>
                    <FormItem>
                        {avatar && !validateImg(avatar) && <Avatar width="200px" height="200px" src={avatar} />}
                    </FormItem>
                    <Button type="button" onClick={handleSubmit}>
                        Register
                    </Button>
                </StyledForm>
            )}
        </Form>
    );
};

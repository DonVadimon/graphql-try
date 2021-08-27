import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { FormApi } from 'final-form';
import { CREATE_USER } from 'GraphQl/mutations/user';
import { UserInput } from 'types/User.types';

import { Counter } from 'components/Counter';

import { Button, FormItem, Input, StyledForm } from './NewUserForm.styles';

const initialValues: UserInput = {
    username: '',
    password: '',
    age: 18,
};

export const NewUserForm = () => {
    const validateText = useCallback((value: string) => (value ? undefined : 'error'), []);

    const validateAge = useCallback((value: number) => (value < 18 ? 'error' : undefined), []);

    const [newUser] = useMutation(CREATE_USER);

    const registerUser = useCallback(
        (values: UserInput, form: FormApi<UserInput, Partial<UserInput>>) => {
            newUser({
                variables: {
                    input: values,
                },
            })
                .then(() => form.reset())
                .catch((err) => console.error(err));
        },
        [newUser],
    );

    return (
        <Form<UserInput> onSubmit={registerUser} initialValues={initialValues}>
            {({ handleSubmit }) => (
                <StyledForm>
                    <Field<string> name="username" validate={validateText}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Input error={!!meta.error && meta.touched} type="text" autoComplete="off" {...input} />
                            </FormItem>
                        )}
                    </Field>
                    <Field<string> name="password" validate={validateText}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Input
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
                    <Button type="button" onClick={handleSubmit}>
                        Register new User
                    </Button>
                </StyledForm>
            )}
        </Form>
    );
};

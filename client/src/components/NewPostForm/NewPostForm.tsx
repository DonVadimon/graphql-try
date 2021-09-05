import React, { useCallback, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { Context } from 'context';
import { FormApi } from 'final-form';
import { CREATE_POST } from 'GraphQl/mutations/posts';
import { IPost, PostInput } from 'types/Post.types';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';

import { FormItem, StyledForm } from './NewPostForm.styles';

const initialValues: Omit<PostInput, 'author'> = {
    title: '',
    content: '',
};

export const NewPostForm = () => {
    const { userId } = useContext(Context);

    const validateText = useCallback((value: string) => (value ? undefined : 'error'), []);

    const [newPost] = useMutation<IPost, { input: PostInput }>(CREATE_POST);

    const createPost = useCallback(
        (values: Omit<PostInput, 'author'>, form: FormApi<Omit<PostInput, 'author'>, Partial<PostInput>>) => {
            newPost({
                variables: {
                    input: { ...values, author: userId },
                },
            })
                .then(() => form.reset())
                .catch((err) => console.error(err));
        },
        [newPost, userId],
    );

    return (
        <Form<Omit<PostInput, 'author'>> onSubmit={createPost} initialValues={initialValues}>
            {({ handleSubmit }) => (
                <StyledForm>
                    <Field<string> name="title" validate={validateText}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Input
                                    placeholder="Title"
                                    error={!!meta.error && meta.touched}
                                    type="text"
                                    autoComplete="off"
                                    {...input}
                                />
                            </FormItem>
                        )}
                    </Field>
                    <Field<string> name="content" validate={validateText}>
                        {({ input, meta }) => (
                            <FormItem>
                                <Textarea
                                    placeholder="Content"
                                    error={!!meta.error && meta.touched}
                                    autoComplete="off"
                                    {...input}
                                />
                            </FormItem>
                        )}
                    </Field>
                    <Button type="button" onClick={handleSubmit}>
                        Create new Post
                    </Button>
                </StyledForm>
            )}
        </Form>
    );
};

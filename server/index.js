const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { schema } = require('./schema');
const { users } = require('./mocks/users');
const { posts } = require('./mocks/posts');

const app = express();
app.use(cors());

const PORT = 8080;

const root = {
    getAllUsers: () => users,
    getUser: ({ id }) => users.find((user) => user.id === Number(id)),
    createUser: ({ input }) => {
        const user = {
            id: Date.now(),
            ...input,
        };
        users.push(user);
        return user;
    },
    getAllPosts: () => posts,
    getPost: ({ id }) => posts.find((post) => post.id === Number(id)),
    getUserPosts: ({ author }) => posts.filter((post) => post.author === Number(author)),
    createPost: ({ input }) => {
        const post = {
            id: Date.now(),
            ...input,
        };
        posts.push(post);
        return post;
    },
};

app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: true,
        schema,
        rootValue: root,
    }),
);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { schema } = require('./schema');
let { users } = require('./mocks/users');
let { posts } = require('./mocks/posts');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get('/', (_req, res) => res.send('Hello World!'));

const root = {
    getAllUsers: () => users,
    getUser: ({ id }) => users.find((user) => user.id === Number(id)),
    createUser: ({ input }) => {
        const avatar =
            input.avatar ||
            'https://sun9-2.userapi.com/impf/c847120/v847120865/12441c/wVW70T08Oas.jpg?size=600x600&quality=96&sign=0475cb87976fd939dab397904e6c2610&type=album';
        const user = {
            id: Date.now(),
            ...input,
            avatar,
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
    deletePost: ({ id }) => {
        const deletedPost = posts.find((post) => Number(post.id) === Number(id));
        posts = posts.filter((post) => Number(post.id) !== Number(id));
        return deletedPost;
    },
    login: ({ input }) =>
        users.find(({ username, password }) => username === input.username && password === input.password),
    deleteUser: ({ id }) => {
        const deletedUser = users.find((user) => Number(user.id) === Number(id));
        users = users.filter((user) => Number(user.id) !== Number(id));
        return deletedUser;
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

app.listen(PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`Server started on http://localhost:${PORT}, see graphiql on http://localhost:${PORT}/graphql`),
);

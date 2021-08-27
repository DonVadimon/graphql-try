const { loadSchemaSync, GraphQLFileLoader } = require('graphql-tools');
const path = require('path');

const schema = loadSchemaSync(path.resolve(__dirname, 'schema.graphql'), {
    loaders: [new GraphQLFileLoader()],
});

module.exports = { schema };

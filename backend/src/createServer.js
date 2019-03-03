const { ApolloServer, makeExecutableSchema } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");
const db = require("./db");
const typeDefs = importSchema("./src/schema.graphql");

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: { requireResolversForResolveType: false }
});

const getUser = token => {
    try {
        if (token) {
            return jwt.verify(token, process.env.APP_SECRET);
        }
        return null;
    } catch (err) {
        return null;
    }
};

function createServer() {
    return new ApolloServer({
        schema,
        context: ({ req }) => {
            const token = req.headers.authorization || "";
            const user = getUser(token);
            return { user, db };
        }
    });
}

module.exports = createServer;

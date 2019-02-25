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

function createServer() {
  return new ApolloServer({
    schema,
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;

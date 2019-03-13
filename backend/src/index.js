const express = require("express");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");
const { makeExecutableSchema } = require("graphql-tools");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const db = require("./db");
const typeDefs = importSchema("src/schema.graphql");
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
const server = new ApolloServer({
    cors: false,
    schema,
    introspection: true,
    playground: true,
    context: req => ({ ...req, db })
});

const corsOptions = {
    credentials: true,
    origin: process.env.FRONTEND_URL
};

const app = express();
app.use(cookieParser());
app.use((req, res, next) => {
    const { token } = req.cookies;
    const user = getUser(token);
    if (user) {
        req.userId = user.id;
    }
    next();
});
app.use(async (req, res, next) => {
    // if they aren't logged in, skip this
    if (!req.userId) {
        return next();
    }
    const user = await db.query.user({ where: { id: req.userId } });
    if (user) {
        req.user = user;
    }
    next();
});
server.applyMiddleware({ app, cors: corsOptions, path: "/" });
app.listen({ port: process.env.PORT }, () =>
    console.log(
        `🚀 Server ready at http://localhost:${process.env.PORT +
            server.graphqlPath}`
    )
);

require("dotenv").config();
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");
const { makeExecutableSchema } = require("graphql-tools");
const cookieParser = require("cookie-parser");
const db = require("./db");
const jwt = require("jsonwebtoken");

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
    context: req => ({ ...req, db })
});

const corsOptions = {
    credentials: true,
    origin: "http://localhost:7777"
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
    req.user = user;
    next();
});
server.applyMiddleware({ app, cors: corsOptions, path: "/" });
app.listen({ port: process.env.PORT }, () =>
    console.log(
        `🚀 Server ready at http://localhost:${process.env.PORT +
            server.graphqlPath}`
    )
);

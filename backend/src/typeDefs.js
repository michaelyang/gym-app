const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID! @unique
        name: String!
        email: String! @unique
        password: String!
    }
    type Query {
        currentUser: User!
    }

    type Mutation {
        register(name: String!, email: String!, password: String!): User!
        login(email: String!, password: String!): User!
    }
`;

module.exports = typeDefs;

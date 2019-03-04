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
        register(email: String!, password: String!, name: String!): User!
        login(email: String!, password: String!): User!
    }
`;

module.exports = typeDefs;

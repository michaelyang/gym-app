const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    currentUser: User!
  }

  #  type Mutation {
  #  }
`;

module.exports = typeDefs;

const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID! @unique
        name: String!
        email: String! @unique
        password: String!
    }

    type Message {
        message: String
    }

    type User {
        id: ID! @unique
        name: String!
        email: String! @unique
        password: String!
        routines: [Routine!]
    }

    type Routine {
        id: ID! @unique
        name: String!
        workouts: [Workout!]
    }

    type Workout {
        id: ID! @unique
        name: String!
    }

    type RoutineSession {
        datetime: DateTime!
        user: User!
        workoutSessions: [WorkoutSession!]
    }

    type WorkoutSession {
        workout: Workout!
        workoutsets: [WorkoutSet!]
    }

    type WorkoutSet {
        reps: Int!
        weight: Int!
    }

    type Query {
        currentUser: User!
    }

    type Mutation {
        register(email: String!, password: String!, name: String!): User!
        login(email: String!, password: String!): User!
        logout: Message!
        createWorkout(name: String!): Workout
    }
`;

module.exports = typeDefs;

import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Workout from "./Workout";

const WORKOUTS_QUERY = gql`
    query WORKOUTS_QUERY {
        workouts {
            id
            name
        }
    }
`;

const Center = styled.div`
    text-align: center;
    margin: auto;
`;

const WorkoutsList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

class Workouts extends Component {
    render() {
        return (
            <Center>
                <Query query={WORKOUTS_QUERY}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error: {error.message}</p>;
                        return (
                            <WorkoutsList>
                                {data.workouts.map(workout => (
                                    <Workout
                                        workout={workout}
                                        key={workout.id}
                                    />
                                ))}
                            </WorkoutsList>
                        );
                    }}
                </Query>
            </Center>
        );
    }
}

export default Workouts;
export { WORKOUTS_QUERY };

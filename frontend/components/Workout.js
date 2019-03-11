import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const WorkoutTitle = styled.h2`
    color: white;
`;

export default class Workout extends Component {
    static propTypes = {
        workout: PropTypes.object.isRequired
    };

    render() {
        const { workout } = this.props;
        return (
            <div>
                {workout.image && (
                    <img src={workout.image} alt={workout.title} />
                )}
                <WorkoutTitle>
                    <Link
                        href={{
                            pathname: "/workout",
                            query: { id: workout.id }
                        }}
                    >
                        <a>{workout.name}</a>
                    </Link>
                </WorkoutTitle>
                <div className="buttonList">
                    <Link
                        href={{
                            pathname: "update",
                            query: { id: workout.id }
                        }}
                    >
                        <a>Edit ✏️</a>
                    </Link>
                </div>
            </div>
        );
    }
}

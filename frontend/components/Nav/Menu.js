import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { adopt } from "react-adopt";
import User from "../User";

const LOCAL_STATE_QUERY = gql`
    query {
        menuOpen @client
    }
`;

const TOGGLE_MENU_MUTATION = gql`
    mutation {
        toggleMenu @client
    }
`;

const Composed = adopt({
    user: ({ render }) => <User>{render}</User>,
    toggleMenu: ({ render }) => (
        <Mutation mutation={TOGGLE_MENU_MUTATION}>{render}</Mutation>
    ),
    localState: ({ render }) => (
        <Query query={LOCAL_STATE_QUERY}>{render}</Query>
    )
});

const Menu = () => (
    <Composed>
        {({ user, toggleMenu, localState }) => {
            const currentUser = user.data.currentUser;
            if (!currentUser) return null;
            return (
                <div open={localState.data.menuOpen}>
                    <header>
                        <button onClick={toggleMenu} title="close">
                            &times;
                        </button>
                        <h2>Menu</h2>
                    </header>
                    <nav>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </nav>
                    <footer>THIS IS THE FOOTER</footer>
                </div>
            );
        }}
    </Composed>
);

export default Menu;
export { LOCAL_STATE_QUERY, TOGGLE_MENU_MUTATION };

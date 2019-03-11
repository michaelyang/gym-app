import React, { Component } from "react";
import Link from "next/link";
import { Query, Mutation } from "react-apollo";
import styled from "styled-components";
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

const StyledMenu = styled.div`
    padding: 20px;
    position: relative;
    background: white;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    width: 250px;
    max-width: 40%;
    bottom: 0;
    transform: translateX(-100%);
    transition: all 0.3s;

    z-index: 5;
    display: grid;
    grid-template-rows: auto 1fr auto;
    ${props =>
        props.open &&
        `transform: translateX(0); box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);`};
    header {
        border-bottom: 5px solid ${props => props.theme.black};
        margin-bottom: 2rem;
    }
    footer {
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: scroll;
    }
`;

const MenuTint = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    ${props => (props.localState.data.menuOpen ? `` : `display: none;`)};
`;

const MenuWrapper = () => (
    <Composed>
        {({ user, toggleMenu, localState }) => {
            const currentUser = user.data.currentUser;
            if (!currentUser) return null;
            return (
                <>
                    <Menu
                        currentUser={currentUser}
                        toggleMenu={toggleMenu}
                        localState={localState}
                    />
                    <MenuTint localState={localState} />
                </>
            );
        }}
    </Composed>
);

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener("click", this.addHandleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.addHandleClick, false);
    }

    addHandleClick = () => {
        if (this.props.localState.data.menuOpen) {
            document.addEventListener("click", this.handleClick, false);
        }
    };

    handleClick = e => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClickOutside();
    };

    handleClickOutside = () => {
        if (!this.props.localState.data.menuOpen) {
            return;
        } else {
            this.props.toggleMenu();
            document.removeEventListener("click", this.handleClick, false);
        }
    };

    closeMenu = () => {
        this.props.toggleMenu();
        document.removeEventListener("click", this.handleClick, false);
    };
    render() {
        return (
            <StyledMenu
                open={this.props.localState.data.menuOpen}
                ref={node => (this.node = node)}
            >
                <header>
                    <button onClick={this.closeMenu} title="close">
                        &times;
                    </button>
                    <h2>{this.props.currentUser.name}</h2>
                </header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a onClick={this.props.toggleMenu}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/workouts">
                                <a onClick={this.props.toggleMenu}>Workouts</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/workouts">
                                <a onClick={this.props.toggleMenu}>Workouts</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/workouts">
                                <a onClick={this.props.toggleMenu}>Workouts</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <footer>
                    <Link href="/">
                        <a>Logout</a>
                    </Link>
                </footer>
            </StyledMenu>
        );
    }
}

export default MenuWrapper;
export { LOCAL_STATE_QUERY, TOGGLE_MENU_MUTATION };

import Link from "next/link";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { TOGGLE_MENU_MUTATION } from "./Menu";
import User from "../User";

const StyledNavBar = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    padding: 0 20px;
    a {
        color: whitesmoke;
        display: flex;
    }
    img {
        height: 36px;
    }
`;

const NavBar = () => (
    <User>
        {({ data }) => {
            const currentUser = data ? data.currentUser : null;
            return (
                <>
                    {currentUser && (
                        <StyledNavBar>
                            <Mutation mutation={TOGGLE_MENU_MUTATION}>
                                {toggleMenu => (
                                    <button onClick={toggleMenu}>
                                        Profile
                                    </button>
                                )}
                            </Mutation>
                            <img
                                src="/static/logo/logoWhite.png"
                                alt="weirdflex"
                            />
                            <Link href="/workouts">
                                <a>Workouts</a>
                            </Link>
                        </StyledNavBar>
                    )}
                </>
            );
        }}
    </User>
);

export default NavBar;

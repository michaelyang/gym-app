import Link from "next/link";
import styled from "styled-components";

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
    <StyledNavBar>
        <img src="/static/logo/logoWhite.png" alt="weirdflex" />
        <Link href="/workouts">
            <a>Workouts</a>
        </Link>
    </StyledNavBar>
);

export default NavBar;

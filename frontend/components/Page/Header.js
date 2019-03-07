import Link from "next/link";
import styled from "styled-components";
import NavBar from "../Nav/NavBar";
import Menu from "../Nav/Menu";

const StyledHeader = styled.header`
    width: 100%;
    height: 48px;
    position: fixed;
    top: 0px;
    background: #e04646;
`;

const Header = () => (
    <StyledHeader>
        <Menu />
        <NavBar />
    </StyledHeader>
);

export default Header;

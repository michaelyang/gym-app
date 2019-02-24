import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "../Nav/Nav";

const StyledHeader = styled.header`
  .bar {
    position: absolute;
    top: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo />
      <Nav hidden />
    </div>
  </StyledHeader>
);

export default Header;

import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: ${props => (props.hidden ? "none" : "")};
`;

const Nav = props => (
  <StyledNav {...props}>
    <Link href="/">
      <a>Placeholder Nav Link</a>
    </Link>
  </StyledNav>
);

export default Nav;

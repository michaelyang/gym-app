import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';

const StyledHeader = styled.header`
    .bar {
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
            {/*
            <Logo>
                <Link href="/">
                    <a>Werid Flex</a>
                </Link>
            </Logo>
            */}
            <Nav />
        </div>
    </StyledHeader>
);

export default Header;

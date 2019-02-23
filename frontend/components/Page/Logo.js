import styled from 'styled-components';

const Logo = styled.h1`
    font-size: 3rem;
    position: relative;
    z-index: 2;
    a {
        padding: 0.5rem 1rem;
        color: black;
        text-decoration: none;
    }
    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

export default Logo;

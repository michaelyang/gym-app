import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../Page/Logo';

const StyledSignUp = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    .SignUp {
    }
`;

const SignUp = () => (
    <StyledSignUp>
        <div className="SignUp">
            <Logo>
                <a>Werid Flex</a>
            </Logo>
            <div>button</div>
            <div>button</div>
        </div>
    </StyledSignUp>
);

export default SignUp;

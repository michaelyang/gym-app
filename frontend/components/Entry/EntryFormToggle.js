import styled from 'styled-components';

const toRegisterText = "Don't have an account yet?";
const toRegisterButtonText = 'Join Now';
const toLoginText = 'Already have an account?';
const toLoginButtonText = 'Sign In';

const StyledEntryFormToggle = styled.span`
    grid-area: form-toggle;
    flex-grow: 1;
    align-self: end;
    color: ${props => props.theme.black};
    font-size: 1.2rem;
    padding: 1rem;
    a {
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
        color: ${props => props.theme.mainRed};
    }
`;

const EntryFormToggle = ({ entryState, handleClick }) => {
    return (
        <>
            {entryState == 'login' ? (
                <StyledEntryFormToggle>
                    {toRegisterText}{' '}
                    <a onClick={handleClick}>{toRegisterButtonText}</a>
                </StyledEntryFormToggle>
            ) : (
                <StyledEntryFormToggle>
                    {toLoginText}{' '}
                    <a onClick={handleClick}>{toLoginButtonText}</a>
                </StyledEntryFormToggle>
            )}
        </>
    );
};

export default EntryFormToggle;

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const loginText = 'Log In';
const registerText = 'Join';

const StyledEntryButton = styled.button`
    width: 100%;
    margin: 1rem 0;
    background: ${props => props.theme.black};
    color: #ededed;
    border: 0;
    font-size: 1.6rem;
    padding: 0.5rem 1.2rem;
    border: none;
    padding: 1.6rem;
    z-index: -2;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover,
    :focus {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 5px 5px rgba(0, 0, 0, 0.22);
    }
`;

const AnimationStyles = styled.span`
    position: relative;
    .fade {
        position: relative;
        transition: all 0.7s;
        backface-visibility: hidden;
    }
    /* Initial State of the entered Dot */
    .fade-enter {
        opacity: 0.01;
        transform: scale(0.8);
    }
    .fade-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 700ms ease-out;
    }
    .fade-exit {
        opacity: 1;
        transform: scale(1);
        position: absolute;
        z-index: -1;
    }
    .fade-exit-active {
        opacity: 0.1;
        transform: scale(0.8);
        transition: all 700ms ease-out;
    }
`;

const EntryButton = ({ entryState, handleSubmit }) => {
    return (
        <StyledEntryButton onClick={handleSubmit}>
            <AnimationStyles>
                <TransitionGroup>
                    <CSSTransition
                        unmountOnExit
                        className="fade"
                        classNames="fade"
                        key={entryState}
                        timeout={700}>
                        <span>
                            {entryState == 'login' ? loginText : registerText}
                        </span>
                    </CSSTransition>
                </TransitionGroup>
            </AnimationStyles>
        </StyledEntryButton>
    );
};

export default EntryButton;

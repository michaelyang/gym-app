import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const loginText = '→';
const registerText = '→';

const StyledEntryButton = styled.button`
    margin: 0 auto;
    margin-bottom: 10px;
    z-index: 1;
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%;
    background: ${props => props.theme.black};
    color: #ededed;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover,
    :focus {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.22);
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

const EntryButton = ({ entrystate, handleSubmit }) => {
    return (
        <StyledEntryButton onClick={handleSubmit}>
            <AnimationStyles>
                <TransitionGroup>
                    <CSSTransition
                        unmountOnExit
                        className="fade"
                        classNames="fade"
                        key={entrystate}
                        timeout={700}>
                        <span>
                            {entrystate == 'login' ? loginText : registerText}
                        </span>
                    </CSSTransition>
                </TransitionGroup>
            </AnimationStyles>
        </StyledEntryButton>
    );
};

export default EntryButton;

import styled from "styled-components";

const StyledButton = styled.button`
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

const SubmitButton = () => <StyledButton type="submit">→</StyledButton>;

export default SubmitButton;

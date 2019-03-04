import React, { Component } from "react";
import styled from "styled-components";
import EntryButton from "./EntryButton";
import FloatingLabelInput from "./FloatingLabelInput";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const loginFormTitle = "Sign in";
const registerFormTitle = "Sign up";

const StyledEntry = styled.div`
    grid-area: form;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    width: 90%;
    max-width: 400px;
    font-size: 1.8rem;
    h2 {
        color: ${props => props.theme.black};
        font-size: 2.4rem;
        font-weight: 700;
        align-self: center;
        margin: 1rem;
        flex: 0.5;
    }
    fieldset {
        width: 100%;
        padding: 0.5rem;
        border: 0;
        display: flex;
        flex: 1;
        &[disabled] {
            opacity: 0.5;
        }
        article {
            padding: 1.2rem 0;
        }
    }
    .outer-wrapper {
        flex: 2;
        min-height: 200px;
        position: relative;
        overflow-x: hidden;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .inner-wrapper {
        width: 200%;
        position: absolute;
        top: 0;
        left: ${props => (props.entrystate == "login" ? "0" : "-100%")};
        transition-duration: 100ms;
        transition-timing-function: cubic-bezier(0.175, 0.665, 0.32, 1), linear;
        transition: left 0.4s ease;
    }
    .pane {
        float: left;
        width: 50%;
        display: block;
    }
`;

class EntryForm extends Component {
    state = {
        currentEmail: "",
        currentPassword: "",
        newEmail: "",
        newPassword: "",
        confirmPassword: "",
        name: ""
    };

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <StyledEntry entrystate={this.props.entryState}>
                <h2>
                    {this.props.entryState == "login"
                        ? loginFormTitle
                        : registerFormTitle}
                </h2>
                <div className="outer-wrapper">
                    <div className="inner-wrapper">
                        <LoginForm
                            className="pane"
                            entryState={this.props.entryState}
                        />
                        <RegisterForm
                            className="pane"
                            entryState={this.props.entryState}
                        />
                    </div>
                </div>
            </StyledEntry>
        );
    }
}

export default EntryForm;

import React, { Component } from 'react';
import styled from 'styled-components';
import EntryButton from './EntryButton';
import FloatingLabelInput from './FloatingLabelInput';

const loginFormTitle = 'Sign in';
const registerFormTitle = 'Sign up';

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
        flex-grow: 1;
    }
    fieldset {
        width: 100%;
        padding: 0.5rem;
        border: 0;
        display: flex;
        flex-grow: 1;
        &[disabled] {
            opacity: 0.5;
        }
        article {
            padding: 1.4rem 0;
            label {
            }
        }
    }
    .outer-wrapper {
        flex-grow: 3;
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
        left: ${props => (props.entrystate == 'login' ? '0' : '-100%')};
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
        currentEmail: '',
        currentPassword: '',
        newEmail: '',
        newPassword: '',
        confirmPassword: '',
        name: '',
    };

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitForm = () => {
        document.getElementById(this.props.entryState).submit();
    };

    render() {
        return (
            <StyledEntry method="post" entrystate={this.props.entryState}>
                <h2>
                    {this.props.entryState == 'login'
                        ? loginFormTitle
                        : registerFormTitle}
                </h2>
                <div className="outer-wrapper">
                    <div className="inner-wrapper">
                        <form method="post" className="pane" id="login">
                            <fieldset
                                disabled={this.props.entryState != 'login'}>
                                <FloatingLabelInput
                                    id="currentEmail"
                                    name="currentEmail"
                                    type="email"
                                    autoComplete="email"
                                    label="Email Address"
                                    value={this.state.email}
                                    onChange={this.saveToState}
                                />
                                <FloatingLabelInput
                                    id="currentPassword"
                                    name="currentPassword"
                                    type="password"
                                    autoComplete="current-password"
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.saveToState}
                                />
                            </fieldset>
                        </form>
                        <form method="post" className="pane" id="register">
                            <fieldset
                                disabled={this.props.entryState != 'register'}>
                                <FloatingLabelInput
                                    id="newEmail"
                                    name="newEmail"
                                    type="email"
                                    autoComplete="email"
                                    label="Email Address"
                                    value={this.state.email}
                                    onChange={this.saveToState}
                                />
                                <FloatingLabelInput
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    autoComplete="password"
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.saveToState}
                                />
                                <FloatingLabelInput
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.saveToState}
                                />
                                <FloatingLabelInput
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    label="Name"
                                    placeholder="John Doe"
                                    value={this.state.email}
                                    onChange={this.saveToState}
                                />
                            </fieldset>
                        </form>
                    </div>
                </div>
                <EntryButton type="button" handleSubmit={this.submitForm} />
            </StyledEntry>
        );
    }
}

export default EntryForm;

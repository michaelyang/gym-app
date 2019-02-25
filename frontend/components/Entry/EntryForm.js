import React, { Component } from 'react';
import styled from 'styled-components';
import EntryButton from './EntryButton';

const loginFormTitle = 'Welcome Back!';
const registerFormTitle = 'Create an Account';

const StyledEntry = styled.form`
    grid-area: form;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 90%;
    max-width: 400px;
    padding: 0.5rem;
    h2 {
        color: ${props => props.theme.offWhite};
        font-weight: 400;
    }
    input,
    textarea,
    select {
        width: 100%;
        padding: 1.4rem 1rem;
        margin: 1rem 0;
        font-size: 1.4rem;
        border: 0;
        border-bottom: 1px solid #ffffff99;
        color: #ffffffdd;
        background: transparent;
        ::placeholder {
            color: #ffffff66;
        }
    }
    fieldset {
        width: 100%;
        padding: 0.5rem;
        border: 0;
        &[disabled] {
            opacity: 0.5;
        }
    }
`;

class EntryForm extends Component {
    state = {
        email: '',
        password: '',
    };

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <StyledEntry method="post">
                <h2>
                    {this.props.entryState == 'login'
                        ? loginFormTitle
                        : registerFormTitle}
                </h2>
                <fieldset>
                    <label htmlFor="email">
                        <input
                            type="email"
                            name="email"
                            autoComplete="username"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.saveToState}
                        />
                    </label>

                    <label htmlFor="password">
                        <input
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.saveToState}
                        />
                    </label>

                    <EntryButton
                        type="submit"
                        entryState={this.props.entryState}
                    />
                </fieldset>
            </StyledEntry>
        );
    }
}

export default EntryForm;

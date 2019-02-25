import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLoginForm = styled.form`
    grid-area: login;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 90%;
    max-width: 400px;
    padding: 0.5rem;
    label {
        display: block;
        margin-bottom: 1rem;
    }
    input,
    textarea,
    select {
        width: 100%;
        padding: 2rem 3rem;
        font-size: 1.6rem;
        border: 0;
        color: #ffffffdd;
        background: #000000cc;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        ::placeholder {
            color: #ffffff66;
        }
        :hover,
        :focus {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.22);
        }
    }
    button,
    input[type='submit'] {
        width: 100%;
        margin: 1rem 0;
        background: ${props => props.theme.black};
        color: #ededed;
        border: 0;
        font-size: 1.6rem;
        padding: 0.5rem 1.2rem;
        border: none;
        padding: 1.6rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        :hover,
        :focus {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.22);
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

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
    };

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <StyledLoginForm method="post">
                <fieldset>
                    <label htmlFor="email">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            autoComplete="username"
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
                    <button type="submit">Login</button>
                </fieldset>
            </StyledLoginForm>
        );
    }
}
export default LoginForm;

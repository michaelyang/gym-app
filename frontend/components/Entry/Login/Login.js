import React, { Component } from "react";
import styled from "styled-components";
import Form from "../../styles/Form";

const LoginForm = styled.form`
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
    color: #dcac96;
    background: #ffffffdd;
    ::placeholder {
      color: #dcac96;
    }
    &:focus {
      outline: 0;
      background: #ffffff;
    }
  }
  button,
  input[type="submit"] {
    width: 100%;
    background: #2d3b55;
    color: white;
    border: 0;
    font-size: 1.6rem;
    padding: 0.5rem 1.2rem;
    border: none;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s;
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

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <LoginForm>
        <fieldset>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="email"
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
              placeholder="password"
              value={this.state.password}
              onChange={this.saveToState}
            />
          </label>
          <button type="submit">Login</button>
        </fieldset>
      </LoginForm>
    );
  }
}
export default Login;

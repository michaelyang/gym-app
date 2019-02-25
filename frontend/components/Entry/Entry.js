import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Modal from "../Modal";

const StyledEntry = styled.div`
  flex-grow: 0.5;
  max-height: 90vh;
  padding: 3rem 0;
  display: grid;
  margin: auto;
  justify-items: center;
  justify-self: center;
  grid-template-areas: "logo" "login" "register";
  grid-template-rows: 3fr 2fr 1fr;
  grid-template-columns: 1fr;
  align-content: center;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Logo = styled.div`
  grid-area: logo;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 200px;
  }
  span {
    margin: 0.5rem;
    font-size: 2.4rem;
    color: #f27c7c;
  }
`;

const RegisterText = styled.span`
  grid-area: register;
  align-self: end;
  color: #2d3b55;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #f27c7c;
  }
`;

class Entry extends Component {
  state = { showRegister: false };
  toggleRegister = () => {
    this.setState({ showRegister: !this.state.showRegister });
  };
  render() {
    return (
      <StyledEntry>
        <Modal show={this.state.showRegister} handleClose={this.toggleRegister}>
          <Register />
        </Modal>
        <Logo>
          <img src="/static/logo/logoColored.png" alt="weirdflex" />
          <span>WeirdFlex</span>
        </Logo>
        <Login />
        <RegisterText>
          Don't have an account yet?{" "}
          <a onClick={this.toggleRegister}>Click here</a>.
        </RegisterText>
      </StyledEntry>
    );
  }
}

export default Entry;

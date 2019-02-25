import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Modal from "../Modal";

const StyledEntry = styled.div`
  display: grid;
  justify-items: center;
  justify-content: stretch;
  grid-template-areas: "logo" "login" "register";
  grid-template-rows: 50% auto 20%;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
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
    color: #fff;
  }
`;

const RegisterText = styled.span`
  grid-area: register;
  align-self: end;
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  a {
    text-decoration: none;
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
          <img src="/static/logo/logoWhite.png" alt="weirdflex" />
          <span>WeirdFlex</span>
        </Logo>
        <Login />
        <RegisterText>
          Don't have an account yet?{" "}
          <a onClick={this.toggleRegister}>Click here.</a>
        </RegisterText>
      </StyledEntry>
    );
  }
}

export default Entry;

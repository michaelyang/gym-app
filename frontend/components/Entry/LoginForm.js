import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import FloatingLabelInput from "./FloatingLabelInput";
import SubmitButton from "./SubmitButton";
import { CURRENT_USER_QUERY } from "../User";

const LOGIN_MUTATION = gql`
    mutation LOGIN_MUTATION($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

class LoginForm extends Component {
    state = {
        email: "",
        password: ""
    };
    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <Mutation
                mutation={LOGIN_MUTATION}
                variables={this.state}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
                {(login, { error, loading }) => (
                    <form
                        className="pane"
                        method="post"
                        onSubmit={async e => {
                            e.preventDefault();
                            await login();
                            this.setState({
                                email: "",
                                password: ""
                            });
                        }}
                    >
                        <fieldset
                            disabled={
                                this.props.entryState != "login" || loading
                            }
                            aria-busy={loading}
                        >
                            <Error error={error} />
                            <FloatingLabelInput
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                label="Email Address"
                                value={this.state.email}
                                onChange={this.saveToState}
                            />
                            <FloatingLabelInput
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                label="Password"
                                value={this.state.password}
                                onChange={this.saveToState}
                            />
                        </fieldset>
                        <SubmitButton />
                    </form>
                )}
            </Mutation>
        );
    }
}

export default LoginForm;

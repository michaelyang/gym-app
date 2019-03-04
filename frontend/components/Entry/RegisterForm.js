import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import FloatingLabelInput from "./FloatingLabelInput";
import SubmitButton from "./SubmitButton";
import { CURRENT_USER_QUERY } from "../User";

const REGISTER_MUTATION = gql`
    mutation REGISTER_MUTATION(
        $email: String!
        $password: String!
        $name: String!
    ) {
        register(email: $email, password: $password, nameL: $name) {
            id
        }
    }
`;

class RegisterForm extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        name: ""
    };
    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <Mutation
                mutation={REGISTER_MUTATION}
                variables={this.state}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
                {(login, { error, loading }) => (
                    <form
                        className="pane"
                        method="post"
                        onSubmit={async e => {
                            e.preventDefault();
                            await register();
                            this.setState({
                                email: "",
                                password: "",
                                confirmPassword: "",
                                name: ""
                            });
                        }}
                    >
                        <fieldset
                            disabled={this.props.entryState != "register"}
                        >
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
                        <SubmitButton />
                    </form>
                )}
            </Mutation>
        );
    }
}

export default RegisterForm;

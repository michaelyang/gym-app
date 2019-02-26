import React, { Component } from 'react';
import styled from 'styled-components';
import EntryForm from './EntryForm';
import EntryFormToggle from './EntryFormToggle';

const StyledEntry = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    margin: auto;
    justify-items: center;
    justify-self: center;
    grid-template-areas: 'logo' 'form' 'form-toggle';
    grid-template-rows: 1fr 3fr 0.5fr;
    align-content: center;
    background-color: white;
    max-width: 500px;
    max-height: 700px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Logo = styled.div`
    grid-area: logo;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    img {
        max-width: 150px;
    }
`;

class Entry extends Component {
    state = { entryState: 'login' };
    toggleEntryState = () => {
        this.setState({
            entryState: this.state.entryState == 'login' ? 'register' : 'login',
        });
    };
    render() {
        return (
            <StyledEntry>
                <Logo>
                    <img src="/static/logo/running.gif" alt="weirdflex" />
                </Logo>
                <EntryForm entryState={this.state.entryState} />
                <EntryFormToggle
                    entryState={this.state.entryState}
                    handleClick={this.toggleEntryState}
                />
            </StyledEntry>
        );
    }
}

export default Entry;

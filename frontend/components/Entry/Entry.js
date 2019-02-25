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
    grid-template-rows: 3fr 1fr 1fr;
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
        color: #c3092d;
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
                    <img src="/static/logo/logoWhite.png" alt="weirdflex" />
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

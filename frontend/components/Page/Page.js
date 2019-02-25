import React, { Component } from 'react';
import Meta from './Meta';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';

const theme = {
    mainRed: '#cb202d',
    red: '#FF0000',
    black: '#2d2d2d',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#f4f4f2',
    maxWidth: '1000px',
};

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/rubik-v8-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Rubik'), local('Rubik-Regular'),
        url('/static/fonts/rubik-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/rubik-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/rubik-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/rubik-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/rubik-v8-latin-regular.svg#Rubik') format('svg'); /* Legacy iOS */
    }

    @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    src: url('/static/fonts/rubik-v8-latin-500.eot'); /* IE9 Compat Modes */
    src: local('Rubik Medium'), local('Rubik-Medium'),
        url('/static/fonts/rubik-v8-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/rubik-v8-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/rubik-v8-latin-500.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/rubik-v8-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/rubik-v8-latin-500.svg#Rubik') format('svg'); /* Legacy iOS */
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
        height: 100%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Rubik';
        background: ${props => props.theme.mainRed};;
        color: ${props => props.theme.black};
        height: 100%;
        overflow-y: scroll;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.black};
    }
    button {  font-family: 'Rubik'; }
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <Meta />
                    <Header />
                    <GlobalStyle />
                    <Inner>{this.props.children}</Inner>
                </>
            </ThemeProvider>
        );
    }
}

export default Page;

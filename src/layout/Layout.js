import React from 'react';
import { theme } from 'layout/theme';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Layout.styles';

export default ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
    </ThemeProvider>
);

import React from 'react';
import { theme, Header, Footer } from 'components/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles';

export default ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
    </ThemeProvider>
);

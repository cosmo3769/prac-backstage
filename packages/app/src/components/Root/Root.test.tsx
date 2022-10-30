import React from 'react';
// import { renderWithEffects } from '@backstage/test-utils';
// import App from './App';
import { Root } from './Root';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { render } from '@testing-library/react';

const baseTheme = createTheme()

describe('App', () => {
  it('should render', async () => {
    

    const rendered = render(
    <BrowserRouter>
    <ThemeProvider theme={baseTheme}>
    <Root />
    </ThemeProvider>
    </BrowserRouter>
    );
    expect(rendered.baseElement).toBeInTheDocument();
  });
});

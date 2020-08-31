import React, {ReactNode, ReactElement} from 'react';
import {render, RenderResult} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import {theme} from 'components';

interface WrapperProps {
  children: ReactNode;
}
const Wrapper = ({children}: WrapperProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, {wrapper: Wrapper, ...options});

export * from '@testing-library/react';
export {customRender as render};

import React from 'react';
import {theme} from 'components';
import {ThemeProvider} from 'styled-components';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;

# icruiting-ui

## Usage

```
$ npm install icruiting-ui styled-components --save
```

If you are using Typescript install styled-components type declarations as well.

```
$ npm install @types/styled-components --save
```

```
import {ThemeProvider} from 'styled-components';
import {theme} from 'icruiting-ui';

export default function App () {
  return (
        <ThemeProvider theme={theme}>
          {/* ... your React App */}
        </ThemeProvider>
  );
}
```

## Explore

Explore individuall components locally with [Storybook](https://storybook.js.org/)

```
$ npm run storybook
```

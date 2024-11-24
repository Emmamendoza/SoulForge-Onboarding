import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from '@mui/material'
import { theme } from './../src/theme/theme'

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    args: { theme: 'dark'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export default preview;
import React from 'react';

import { ThemeProvider } from '@mui/material/styles';

import theme from 'common/theme';
import StepsProvider from 'common/providers/steps';

import Layout from 'components/layout';


const App: React.FC = () => (
  <ThemeProvider
    theme={theme}
  >
    <StepsProvider>
      <Layout />
    </StepsProvider>
  </ThemeProvider>
);

export default App;

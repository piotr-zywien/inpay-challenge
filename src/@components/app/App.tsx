import React from 'react';

import { ThemeProvider } from '@mui/material/styles';

import theme from 'common/theme';

import Layout from 'components/layout';


const App: React.FC = () => (
  <ThemeProvider
    theme={theme}
  >
    <Layout />
  </ThemeProvider>
);

export default App;

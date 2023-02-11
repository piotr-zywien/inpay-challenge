import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'components/app';


const app = document.getElementById('app');
const root = createRoot(app!);

root && root.render(<App />);

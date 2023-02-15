import React from 'react';

import StepsWrapper, { StepsShape } from 'components/steps';

import businessSchema from './businessSchema';
import BusinessShape from './BusinessShape';


const Business: React.FC<StepsShape> = ({ index }) => (
  <StepsWrapper
    index={index}
    schema={businessSchema}
    shape={BusinessShape}
    lines={[
      'That is the nature of the business transaction?',
    ]}
    inits={{
      'type': {
        label: 'Choose the type of nature of business?',
        initial: '',
      },
    }}
    full
  />
);

export default Business;

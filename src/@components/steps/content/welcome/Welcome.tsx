import React from 'react';

import StepsWrapper, { StepsShape } from 'components/steps';


const Welcome: React.FC<StepsShape> = ({ index }) => (
  <StepsWrapper
    index={index}
    lines={[
      'You need to upload and complete KYC & Due Dilligence. Input your basic information about the customer and add the UBO. Upload KYC documents and add Due Dilligence.',
    ]}
  />
);

export default Welcome;

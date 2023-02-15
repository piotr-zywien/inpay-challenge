import React from 'react';

import StepsWrapper, { StepsShape } from 'components/steps';


const Approval: React.FC<StepsShape> = ({ index }) => (
  <StepsWrapper
    index={index}
    lines={[
      'Your customer is now approved!',
    ]}
  />
);

export default Approval;

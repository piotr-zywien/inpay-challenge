import React from 'react';

import StepsWrapper, { StepsShape } from 'components/steps';

import volumeSchema from './volumeSchema';
import VolumeShape from './VolumeShape';


const Volume: React.FC<StepsShape> = ({ index }) => (
  <StepsWrapper
    index={index}
    schema={volumeSchema}
    shape={VolumeShape}
    lines={[
      'What is the estimated monthly volume in € and what is the average transaction size in €?',
    ]}
    inits={{
      'estimatedMonthlyVolume': {
        label: 'Estimated monthly volume in €',
        initial: '',
      },
      'estimatedAverageTransaction': {
        label: 'stimated average transaction size in €',
        initial: '',
      },
    }}
  />
);

export default Volume;

import React from 'react';

import ChildrenShape from 'common/shapes/children';
import { useSteps } from 'common/providers/steps';

import StepperShape from './StepperShape';
import Step from './step';


const Stepper: React.FC<StepperShape> = ({ steps }) => {
  const {
    step,
  } = useSteps();

  return (
    <div>
      {steps.map(({ title, content }, index) => (
        <Step
          key={index}
          index={index}
          title={title}
        >
          {content}
        </Step>
      ))}
    </div>
  )
};

export default Stepper;

import { ComponentType } from 'react';


type StepShape = {
  title: string,
  content: ComponentType,
};

interface StepperShape {
  steps: StepShape[],
}

export default StepperShape;

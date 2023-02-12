import { useState, useEffect } from 'react';

import StepStateEnum from 'common/enums/state';

const useSteps = () => {
  const [step, setStep] = useState<number>(0);
  const [steps, setSteps] = useState<StepStateEnum[]>([]);

  const initSteps = (value: number) => (new Array(value))
    .map(() => StepStateEnum.PENDING);

  const getState = (value: number) => steps[value];

  useEffect(() => {
    const $steps = steps;
    $steps[step] = StepStateEnum.CURRENT,
    setSteps($steps);
  }, [steps, step]);

  return {
    step,
    initSteps,
    setStep,
    getState,
  };
};

export default useSteps;

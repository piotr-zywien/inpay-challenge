import { useState, useLayoutEffect, useMemo } from 'react';

import StepStateEnum from 'common/enums/state';


const useSteps = () => {
  const [previous, setPrevious] = useState<StepStateEnum>(StepStateEnum.PENDING);
  const [step, setStep] = useState<number>(0);
  const [steps, setSteps] = useState<StepStateEnum[]>([]);
  const hasPrev = useMemo<boolean>(
    () => (step - 1) >= 0,
    [step],
  );
  const hasNext = useMemo<boolean>(
    () => (step + 1) <= (steps.length - 1),
    [step, steps],
  );

  const initSteps = (value: number) => {
    const $steps = [...Array(value)].map(() => StepStateEnum.PENDING);
    $steps[step] = StepStateEnum.CURRENT;
    setSteps($steps);
  };

  const onStep = (value: number) => {
    const $steps = steps;
    $steps[step] = previous;
    setPrevious($steps[value]);
    $steps[value] = StepStateEnum.CURRENT;
    setSteps($steps);
    setStep(value);
  };

  const getState = (value: number) => steps[value];

  const next = () => {
    if (!hasNext) return;
    const nextStep = step + 1;
    setStep(nextStep);
    onStep(nextStep);
  };

  const prev = () => {
    if (!hasPrev) return;
    const prevStep = step - 1;
    setStep(prevStep);
    onStep(prevStep);
  };

  return {
    step,
    initSteps,
    onStep,
    setStep,
    getState,
    hasNext,
    hasPrev,
    next,
    prev,
  };
};

export default useSteps;

import React from 'react';

import { withStyles } from '@mui/styles';
import AccordionSummary from '@mui/material/AccordionSummary';

import { useSteps } from 'common/providers/steps';

import StepSummaryShape from './StepSummaryShape';


// const StyledAccordionSummary = withStyles(({
//
// }) => {
//
// })(AccordionSummary);

const StepSummary: React.FC<StepSummaryShape> = ({
  index,
  children,
}) => {
  const {
    setStep,
    getState,
  } = useSteps();
  const state = getState(index);
  console.log(index, state);
  return (
    <AccordionSummary onClick={() => setStep(index)}>
      {children}
    </AccordionSummary>
  );
};

export default StepSummary;

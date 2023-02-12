import React from 'react';

import { withStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';

import { useSteps } from 'common/providers/steps';

import StepShape from './StepShape';
import StepSummary from './summary';
import StepDetails from './details';


// const StyledAccordion = withStyles(({
//
// }) => {
//
// })(Accordion);

const Step: React.FC<StepShape> = ({
  index,
  title,
  state,
  children,
}) => {
  const { step } = useSteps();
  return (
    <Accordion
      expanded={step === index}
    >
      <StepSummary
        index={index}
      >
        {title}
      </StepSummary>
      <StepDetails
        index={index}
      >
        {children}
      </StepDetails>
    </Accordion>
  );
};

export default Step;

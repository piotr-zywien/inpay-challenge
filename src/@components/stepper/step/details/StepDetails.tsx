import React from 'react';

import { withStyles } from '@mui/styles';
import AccordionDetails from '@mui/material/AccordionDetails';

import { useSteps } from 'common/providers/steps';

import StepDetailsShape from './StepDetailsShape';


// const StyledAccordionDetails = withStyles(({
//
// }) => {
//
// })(AccordionDetails);

const StepDetails: React.FC<StepDetailsShape> = ({
  index,
  children,
}) => {
  const {
    setStep,
    getState,
  } = useSteps();
  return (
    <AccordionDetails>
      {children}
    </AccordionDetails>
  );
};

export default StepDetails;

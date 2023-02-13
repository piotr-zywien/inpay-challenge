import React from 'react';
import { withStyles } from 'tss-react/mui';

import Accordion from '@mui/material/Accordion';

import { useSteps } from 'common/providers/steps';

import StepShape from './StepShape';
import StepSummary from './summary';
import StepDetails from './details';


const StyledAccordion = withStyles(
  Accordion,
  ({ spacing }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: spacing(1.5),
      boxShadow: 'none',
      marginTop: spacing(1),
      marginBottom: spacing(1),
      '&::before': {
        backgroundColor: 'transparent',
      },
      '&:first-of-type': {
        borderRadius: spacing(1.5),
      },
      '&:last-of-type': {
        borderRadius: spacing(1.5),
      },
    },
  }),
);

const Step: React.FC<StepShape> = ({
  index,
  title,
  state,
  children,
}) => {
  const {
    step,
  } = useSteps();
  return (
    <StyledAccordion
      expanded={step === index}
    >
      <StepSummary
        index={index}
        title={title}
      />
      <StepDetails
        index={index}
      >
        {children}
      </StepDetails>
    </StyledAccordion>
  );
};

export default Step;

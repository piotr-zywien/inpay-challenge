import React from 'react';
import { withStyles } from 'tss-react/mui';

import AccordionDetails from '@mui/material/AccordionDetails';

import { useSteps } from 'common/providers/steps';

import StepDetailsShape from './StepDetailsShape';


const StyledAccordionDetails = withStyles(
  AccordionDetails,
  ({ spacing, palette }) => ({
    root: {
      display: 'flex',
      paddingLeft: spacing(8),
      paddingRight: spacing(8),
      paddingBottom: spacing(6),
      color: palette.primary.dark,
    },
  }),
);

const StepDetails: React.FC<StepDetailsShape> = ({
  index,
  children,
}) => {
  const {
    setStep,
    getState,
  } = useSteps();
  return (
    <StyledAccordionDetails>
      {children}
    </StyledAccordionDetails>
  );
};

export default StepDetails;

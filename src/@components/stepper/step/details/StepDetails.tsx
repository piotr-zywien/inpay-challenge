import React from 'react';
import { withStyles } from 'tss-react/mui';

import AccordionDetails from '@mui/material/AccordionDetails';

import { useSteps } from 'common/providers/steps';

import Button from 'components/button';

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
      flexDirection: 'column',
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
    hasNext,
    hasPrev,
    next,
    prev,
  } = useSteps();
  return (
    <StyledAccordionDetails>
      {children}
      <div>
        {hasPrev && (
          <Button
            onClick={prev}
            text="Back"
          />
        )}
        {hasNext && (
          <Button
            onClick={next}
            text="Next"
          />
        )}
      </div>
    </StyledAccordionDetails>
  );
};

export default StepDetails;

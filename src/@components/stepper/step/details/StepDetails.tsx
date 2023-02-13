import React from 'react';
import { makeStyles, withStyles } from 'tss-react/mui';

import AccordionDetails from '@mui/material/AccordionDetails';

import { useSteps } from 'common/providers/steps';

import Button from 'components/button';

import StepDetailsShape from './StepDetailsShape';


const useStyles = makeStyles()(({ spacing }) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: spacing(4),
  },
}));

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
  const { classes } = useStyles();
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
      <div className={classes.buttons}>
        {hasPrev && (
          <Button
            onClick={prev}
            text={hasNext ? 'Back' : 'Done'}
          />
        )}
        {hasNext && (
          <Button
            onClick={next}
            text={hasPrev ? 'Next' : 'Start'}
          />
        )}
      </div>
    </StyledAccordionDetails>
  );
};

export default StepDetails;

import React from 'react';
import {
  withStyles,
  makeStyles,
} from 'tss-react/mui';

import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import { useSteps } from 'common/providers/steps';
import StepStateEnum from 'common/enums/state';

import StepSummaryShape from './StepSummaryShape';
import StepSummaryNumber from './StepSummaryNumber';


const useStyles = makeStyles()(({ palette }) => ({
  pending: {
    color: palette.primary.light
  },
}));

const StyledAccordionSummary = withStyles(
  AccordionSummary,
  ({ palette }) => ({
    root: {
      color: palette.primary.dark,
    },
  }),
);

const StepSummary: React.FC<StepSummaryShape> = ({
  index,
  title,
}) => {
  const {
    onStep,
    getState,
  } = useSteps();
  const { cx, classes } = useStyles();
  const state = getState(index);

  return (
    <StyledAccordionSummary onClick={() => onStep(index)}>
      <StepSummaryNumber index={index} state={state} />
      <Typography
        variant="h5"
        className={cx({
          [classes.pending]: state === StepStateEnum.PENDING,
        })}
      >
        {title}
      </Typography>
    </StyledAccordionSummary>
  );
};

export default StepSummary;

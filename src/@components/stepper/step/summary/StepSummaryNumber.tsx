import React from 'react';
import { makeStyles } from 'tss-react/mui';

import Typography from '@mui/material/Typography';

import StepStateEnum from 'common/enums/state';

import StepSummaryNumberShape from './StepSummaryNumberShape';


const useStyles = makeStyles()(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    borderRadius: '50%',
    borderWidth: spacing(0.25),
    borderStyle: 'solid',
    borderColor: palette.primary.dark,
    width: spacing(4),
    height: spacing(4),
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: spacing(1.5),
  },
  content: {
    fontWeight: 'bold',
  },
  pending: {
    color: palette.primary.light,
    borderColor: palette.primary.light,
  },
}));

const StepSummaryNumber: React.FC<StepSummaryNumberShape> = ({ index, state }) => {
  const { cx, classes } = useStyles();
  return (
    <div className={cx(classes.root, {
      [classes.pending]: state === StepStateEnum.PENDING,
    })}>
      <Typography variant="h5" className={classes.content}>
        {index + 1}
      </Typography>
    </div>
  );
};

export default StepSummaryNumber;

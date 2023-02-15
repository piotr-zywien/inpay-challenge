import React from 'react';
import { makeStyles } from 'tss-react/mui';

import { useSteps } from 'common/providers/steps';

import Button from 'components/button';

import StepsWrapperButtonsShape from './StepsWrapperButtonsShape';


const useStyles = makeStyles()(({ spacing }) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: spacing(4),
  },
}));

const StepsWrapperButtons: React.FC<StepsWrapperButtonsShape> = ({
  onNext,
  disabled,
}) => {
  const { classes } = useStyles();
  const {
    hasNext,
    hasPrev,
    prev,
  } = useSteps();

  return (
    <div className={classes.root}>
      {hasPrev && (
        <Button
          onClick={prev}
          text={hasNext ? 'Back' : 'Done'}
        />
      )}
      {hasNext && (
        <Button
          onClick={onNext}
          text={hasPrev ? 'Next' : 'Start'}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default StepsWrapperButtons;

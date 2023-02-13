import React, { useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';

import ChildrenShape from 'common/shapes/children';
import { useSteps } from 'common/providers/steps';

import Button from 'components/button';

import StepperShape from './StepperShape';
import Step from './step';


const useStyles = makeStyles()(({ spacing }) => ({
  root: {
    display: 'flex',
    width: '80%',
    flexDirection: 'column',
    margin: spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Stepper: React.FC<StepperShape> = ({ steps }) => {
  const { classes } = useStyles();
  const {
    initSteps,
  } = useSteps();

  useEffect(() => {
    initSteps(steps.length);
  }, [steps]);

  return (
    <div className={classes.root}>
      {steps.map(({ title, content }, index) => (
        <Step
          key={index}
          index={index}
          title={title}
        >
          {content}
        </Step>
      ))}
    </div>
  )
};

export default Stepper;

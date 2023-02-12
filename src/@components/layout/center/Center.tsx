import React from 'react';
import { makeStyles } from 'tss-react/mui';

import Stepper from 'components/stepper';
import Welcome from 'components/steps/welcome';
import Details from 'components/steps/details';


const useStyles = makeStyles()(({ palette }) => ({
  root: {
    display: 'flex',
    width: '60%',
    backgroundColor: palette.background.content,
  },
}));

const Center: React.FC<ChildrenShape> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div
      className={classes.root}
    >
      <Stepper
        steps={[
          {
            title: 'Welcome',
            content: <Welcome />,
          },
          {
            title: 'Company details',
            content: <Details />,
          },
        ]}
      />
    </div>
  );
};

export default Center;

import React from 'react';
import { makeStyles } from 'tss-react/mui';

import Typography from '@mui/material/Typography';

import Stepper from 'components/stepper';
import Welcome from 'components/steps/welcome';
import Details from 'components/steps/details';
import Owners from 'components/steps/owners';
import Business from 'components/steps/business';
import Volume from 'components/steps/volume';
import Approval from 'components/steps/approval';


const useStyles = makeStyles()(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    width: '50%',
    maxHeight: '100vh',
    overflowY: 'scroll',
    flexDirection: 'column',
    justifyContent: 'center',
    placeContent: 'flex-start',
    backgroundColor: palette.background.content,
    padding: spacing(2),
  },
  estimation: {
    marginTop: spacing(2),
  },
}));

const Center: React.FC<ChildrenShape> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div
      className={classes.root}
    >
    <Typography
      variant="subtitle2"
      align="center"
    >
      KYC & DUE DILIGENCE
    </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Add new customer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.estimation}
      >
        Estimated time: <b>10 min</b>
      </Typography>
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
          {
            title: 'Ultimate Beneficial Owner(s)',
            content: <Owners />,
          },
          {
            title: 'Nature of business',
            content: <Business />,
          },
          {
            title: 'Estimated monthly volume',
            content: <Volume />,
          },
          {
            title: 'Customer approval',
            content: <Approval />,
          },
        ]}
      />
    </div>
  );
};

export default Center;

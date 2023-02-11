import React from 'react';
import { makeStyles } from 'tss-react/mui';

import SvgIcon from '@mui/material/SvgIcon';

import Logo from 'assets/Logo.svg';


const useStyles = makeStyles()(({ spacing, palette }) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    width: spacing(8),
    padding: spacing(2),
  },
  logo: {
    fill: palette.basic.white,
  },
}));

const Left: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div
      className={classes.root}
    >
      <Logo className={classes.logo} />
    </div>
  );
};

export default Left;

import React from 'react';
import { makeStyles } from 'tss-react/mui';

import Left from './left';
import Center from './center';
import Right from './right';


const useStyles = makeStyles()(({ palette }) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    minWidth: '100vw',
    minHeight: '100vh',
    maxWidth: '100vw',
    maxHeight: '100vh',
    backgroundColor: palette.background.main,
    margin: 0,
  },
}));

const Layout: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div
      className={classes.root}
    >
      <Left />
      <Center />
      <Right />
    </div>
  );
};

export default Layout;

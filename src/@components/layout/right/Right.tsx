import React from 'react';
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(({ palette }) => ({
  root: {
    display: 'flex',
    width: 'auto',
  },
}));

const Right: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div
      className={classes.root}
    >
    </div>
  );
};

export default Right;

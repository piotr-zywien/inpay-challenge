import React from 'react';
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(({ palette }) => ({
  root: {
    display: 'flex',
    width: '60%',
    backgroundColor: palette.background.content,
  },
}));

const Center: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div
      className={classes.root}
    >
    </div>
  );
};

export default Center;

import React, { useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';

import ChildrenShape from 'common/shapes/children';


const useStyles = makeStyles()(({ spacing }) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    paddingTop: spacing(2),
  },
}));

const StepsContent: React.FC<ChildrenShape> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default StepsContent;

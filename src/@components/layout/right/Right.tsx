import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import Typography from '@mui/material/Typography';

import Question from './question';


const useStyles = makeStyles()(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'flex-end',
    width: 'min-content',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    color: palette.background.light,
  },
  description: {
    marginBottom: spacing(3),
  },
  faq: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    borderRadius: spacing(1.5),
    color: palette.primary.main,
    backgroundColor: palette.background.light,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: spacing(3),
    flexGrow: 1,
    padding: spacing(2),
  },
}));

const Right: React.FC = () => {
  const { classes } = useStyles();
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      className={classes.root}
    >
      <div className={classes.container}>
        <Typography
          variant="h4"
          align="center"
          className={classes.title}
        >
          FAQ
        </Typography>
        <div className={classes.faq}>
          <Typography
            variant="h6"
            gutterBottom
          >
            Get help with the KYC and Due Dilligence
          </Typography>
          <Typography
            className={classes.description}
            variant="body1"
            gutterBottom
          >
            Here you will find instruction on how to complete the KYC and Due Dilligence step by step. If you still have questions, let us know.
          </Typography>
          <Question
            title="What customer information do I need before I can add a new customer?"
            details="You need ALL the customr information!"
            onClick={() => setExpanded(0)}
            expanded={expanded === 0}
          />
          <Question
            title="How long does the workflow take?"
            details="It takes as long as it takes! LOL JK, 10 mins!"
            onClick={() => setExpanded(1)}
            expanded={expanded === 1}
          />
          <Question
            title="Can I come back later?"
            details="Yes, you can pause in the middle of the flow and get back if you need to. The data will be store for 30 days."
            onClick={() => setExpanded(2)}
            expanded={expanded === 2}
          />
        </div>
      </div>
    </div>
  );
};

export default Right;

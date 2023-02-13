import React from 'react';
import {
  withStyles,
  makeStyles,
} from 'tss-react/mui';

import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import QuestionSummaryShape from './QuestionSummaryShape';


const useStyles = makeStyles()(({ palette, spacing }) => ({
  label: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: 1,
  },
}));

const StyledAccordionSummary = withStyles(
  AccordionSummary,
  ({ palette }) => ({
    root: {
      color: palette.primary.dark,
    },
  }),
);

const QuestionSummary: React.FC<QuestionSummaryShape> = ({
  value,
  onClick,
  expanded,
}) => {
  const { classes } = useStyles();
  return (
    <StyledAccordionSummary
      onClick={onClick}
      expandIcon={
        <ExpandMoreIcon />
      }
    >
      <Typography
        variant="h6"
        className={classes.label}
      >
        {value}
      </Typography>
    </StyledAccordionSummary>
  );
};

export default QuestionSummary;

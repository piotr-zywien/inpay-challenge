import React from 'react';
import {
  withStyles,
} from 'tss-react/mui';

import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import QuestionSummaryShape from './QuestionSummaryShape';


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
}) => (
  <StyledAccordionSummary
    onClick={onClick}
    expandIcon={
      <ExpandMoreIcon />
    }
  >
    <Typography
      variant="h6"
    >
      {value}
    </Typography>
  </StyledAccordionSummary>
);

export default QuestionSummary;

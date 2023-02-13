import React from 'react';
import { withStyles } from 'tss-react/mui';

import Accordion from '@mui/material/Accordion';

import QuestionShape from './QuestionShape';
import QuestionSummary from './summary';
import QuestionDetails from './details';


const StyledAccordion = withStyles(
  Accordion,
  ({ spacing }) => ({
    root: {
      marginTop: spacing(1),
      marginBottom: spacing(0.5),
      borderRadius: spacing(1.5),
      boxShadow: 'none',
      '&::before': {
        backgroundColor: 'transparent',
      },
      '&:first-of-type': {
        borderRadius: spacing(1.5),
      },
      '&:last-of-type': {
        borderRadius: spacing(1.5),
      },
    },
  }),
);

const Question: React.FC<QuestionShape> = ({
  title,
  details,
  expanded,
  onClick,
}) => (
  <StyledAccordion
    expanded={expanded}
  >
    <QuestionSummary
      value={title}
      onClick={onClick}
      expanded={expanded}
    />
    <QuestionDetails
      value={details}
    />
  </StyledAccordion>
);

export default Question;

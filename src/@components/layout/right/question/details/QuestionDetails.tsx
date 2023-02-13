import React from 'react';
import {
  withStyles,
} from 'tss-react/mui';

import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import QuestionDetailsShape from './QuestionDetailsShape';


const StyledAccordionDetails = withStyles(
  AccordionDetails,
  ({ palette }) => ({
    root: {
      color: palette.primary.dark,
    },
  }),
);

const QuestionDetails: React.FC<QuestionDetailsShape> = ({
  value,
}) => (
  <StyledAccordionDetails>
    <Typography variant="body1">
      {value}
    </Typography>
  </StyledAccordionDetails>
);

export default QuestionDetails;

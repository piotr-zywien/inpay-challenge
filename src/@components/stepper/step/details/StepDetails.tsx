import React from 'react';
import { withStyles } from 'tss-react/mui';

import AccordionDetails from '@mui/material/AccordionDetails';

import StepDetailsShape from './StepDetailsShape';


const StyledAccordionDetails = withStyles(
  AccordionDetails,
  ({ spacing, palette }) => ({
    root: {
      display: 'flex',
      paddingLeft: spacing(8),
      paddingRight: spacing(8),
      paddingBottom: spacing(6),
      color: palette.primary.dark,
      flexDirection: 'column',
    },
  }),
);

const StepDetails: React.FC<StepDetailsShape> = ({
  children,
}) => (
  <StyledAccordionDetails>
    {children}
  </StyledAccordionDetails>
);

export default StepDetails;

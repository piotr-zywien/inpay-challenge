import React from 'react';
import { withStyles } from 'tss-react/mui';

import MuiButton from '@mui/material/Button';

import ButtonShape from './ButtonShape';


const StyledButton = withStyles(
  MuiButton,
  ({ palette, spacing }) => ({
    root: {
      color: palette.primary.main,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: palette.primary.main,
      borderRadius: spacing(5),
      fontWeight: 'bold',
    },
  }),
);

const Button: React.FC<ButtonShape> = ({
  text,
  onClick
}) => {
  return (
    <StyledButton
      variant="outlined"
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

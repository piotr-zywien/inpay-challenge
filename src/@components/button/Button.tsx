import React from 'react';
import { withStyles } from 'tss-react/mui';

import MuiButton from '@mui/material/Button';

import ButtonShape from './ButtonShape';


const StyledButton = withStyles(
  MuiButton,
  ({ palette, spacing }) => ({
    root: {
      color: palette.primary.main,
      borderWidth: spacing(0.25),
      borderStyle: 'solid',
      borderColor: palette.primary.main,
      borderRadius: spacing(5),
      fontWeight: 'bold',
      marginLeft: spacing(1),
      marginRight: spacing(1),
      '&:hover': {
        color: palette.basic.white,
        backgroundColor: palette.background.main,
        borderWidth: spacing(0.25),
        borderStyle: 'solid',
        borderColor: palette.primary.main,
        borderRadius: spacing(5),
      },
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

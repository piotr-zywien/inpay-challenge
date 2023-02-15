import React from 'react';

import Grid from '@mui/material/Grid';
import MuiTextField from '@mui/material/TextField';

import TextFieldShape from './TextFieldShape';

const TextField: React.FC<TextFieldShape> = ({
  name,
  value,
  error,
  helper,
  onChange,
  label,
  required,
  cols,
}) => {
  const $onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    onChange(
      name,
      value,
      true,
    );
  };

  return (
    <Grid xs={cols || 6} item>
      <MuiTextField
        name={name}
        value={value}
        helperText={helper}
        error={error}
        onChange={$onChange}
        label={label}
        required={required}
        fullWidth
      />
    </Grid>
  );
};

export default TextField;

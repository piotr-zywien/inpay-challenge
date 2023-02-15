import React from 'react';
import { useFormik } from 'formik';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useSteps } from 'common/providers/steps';
import Resource from 'common/resource';

import TextField from 'components/text-field';

import StepsContainer from './sections/container';
import StepsContent from './sections/content';
import StepsButtons from './sections/buttons';
import StepsWrapperShape from './StepsWrapperShape';


const getInitialValues = (values: { [key: string]: {
  initial: any,
  label: string,
} }) => {
  const initialValues = {};
  Object.keys(values).forEach(key => {
    initialValues[key] = values[key].initial;
  })
  return initialValues;
}

const StepsWrapper: React.FC<StepsWrapperShape> = ({
  index,
  lines,
  schema,
  shape,
  inits,
  full,
}) => {
  const { next } = useSteps();

  if (!inits || !schema || !shape) {
    return (
      <StepsContainer>
        {(lines || []).map(line => (
          <Typography variant="body1" gutterBottom>
            {line}
          </Typography>
        ))}
        <StepsButtons
          onNext={() => Resource.onSave(index).then(() => next())}
        />
      </StepsContainer>
    );
  }

  const initialValues = getInitialValues(inits);

  const formik: FormikProps<shape> = useFormik<shape>({
    initialValues,
    onSubmit: (values: shape) => Resource.onSave(index, values).then(() => next()),
    validationSchema: schema,
    enableReinitialize: true,
  });

  if (!formik) return null;

  const {
    values,
    errors,
    setFieldValue,
    handleSubmit,
    isValid,
    dirty,
  } = formik;

  return (
    <StepsContainer>
      {(lines || []).map(line => (
        <Typography variant="body1" gutterBottom>
          {line}
        </Typography>
      ))}
      <StepsContent>
        <Grid spacing={2} container>
          {Object.keys(values).map((key) => (
            <TextField
              name={key}
              value={values[key]}
              error={Boolean(errors[key])}
              hekper={errors[key]}
              onChange={setFieldValue}
              label={inits[key].label}
              required={!schema.describe().fields[key].optional}
              cols={full ? 12 : undefined}
            />
          )
        )}
        </Grid>
      </StepsContent>
      <StepsButtons
        onNext={handleSubmit}
        disabled={!dirty || !isValid}
      />
    </StepsContainer>
  );
};

export default StepsWrapper;

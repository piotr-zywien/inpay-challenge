import * as Yup from 'yup';


const schema = Yup.object({
  estimatedMonthlyVolume: Yup
    .number()
    .positive()
    .required(),
  estimatedAverageTransaction: Yup
    .number()
    .positive()
    .required(),
});

export default schema;

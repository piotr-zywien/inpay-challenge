import * as Yup from 'yup';


const schema = Yup.object({
  type: Yup
    .string()
    .required('Business Type is required!')
    .test('len', 'Empty Business Type is not allowed!', val => val ? val.length > 0 : false),
});

export default schema;

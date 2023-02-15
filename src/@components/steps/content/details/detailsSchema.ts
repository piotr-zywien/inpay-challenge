import * as Yup from 'yup';


const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Company Name is required!')
    .test('len', 'Empty Company Name is not allowed!', val => val ? val.length > 0 : false),
  country: Yup
    .string()
    .required('Country is required!')
    .test('len', 'Empty Country is not allowed!', val => val ? val.length > 0 : false),
  address: Yup
    .string()
    .required('Address is required!')
    .test('len', 'Empty Address is not allowed!', val => val ? val.length > 0 : false),
  apartment: Yup
    .string()
    .optional(),
  postCode: Yup
    .string()
    .required('Post Code is required!')
    .test('len', 'Empty Post Code is not allowed!', val => val ? val.length > 0 : false),
  city: Yup
    .string()
    .required('City is required!')
    .test('len', 'Empty City is not allowed!', val => val ? val.length > 0 : false),
  website: Yup
    .string()
    .optional(),
  registration: Yup
    .string()
    .required('Registration is required!')
    .test('len', 'Empty Registration is not allowed!', val => val ? val.length > 0 : false),
});

export default schema;

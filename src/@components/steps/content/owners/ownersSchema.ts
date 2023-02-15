import * as Yup from 'yup';


const schema = Yup.object({
  name: Yup
    .string()
    .required('Full Name is required!')
    .test('len', 'Empty Full Name is not allowed!', val => val ? val.length > 0 : false),
  role: Yup
    .string()
    .required('Role is required!')
    .test('len', 'Empty Role is not allowed!', val => val ? val.length > 0 : false),
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
  email: Yup
    .string()
    .required('Email is required!')
    .email('Email is invalid!'),
});

export default schema;

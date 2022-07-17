import { object, string, number } from 'yup';

const schema = object().shape({
  fullname: string().required('is required'),
  email: string().required('is required').email('not valid'),
  phone: string()
    .required('is required')
    .test({
      name: 'isNumber',
      message: 'must be a positive number',
      test: (value) => /^[0-9]\d*$/.test(value),
    })
    .test({
      name: 'isMinimum',
      message: 'minimum 10 char',
      test: (value) => value.length >= 10,
    })
    .test({
      name: 'isMaximum',
      message: 'maximum 15 char',
      test: (value) => value.length <= 15,
    }),
});

export default schema;

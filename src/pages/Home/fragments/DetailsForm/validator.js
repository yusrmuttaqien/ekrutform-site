import { array, object, string } from 'yup';

const schema = object().shape({
  educations: array().of(
    object().shape({
      school: string().required('is required'),
      major: string().required('is required'),
      // start_date: string().required('is required'),
      // end_date: string().required('is required'),
    })
  ),
  experiences: array().of(
    object().shape({
      company: string().required('is required'),
      title: string().required('is required'),
      // start_date: string().required('is required'),
      // end_date: string().required('is required'),
    })
  ),
});

export default schema;

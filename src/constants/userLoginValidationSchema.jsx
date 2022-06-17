import * as Yup from 'yup';

export const userLoginValidationSchema = Yup.object({
 email: Yup.string()
    .matches(/^[\w-|.]+@([\w-]+\.)+[\w-]{2,4}$/, '* Email must contain "@" and "." characters and may contain "-" and "."characters before @')
    .required('* Required'),
  password: Yup.string()
    .min(8, '* Minimum eight characters')
    .required('* Required'),
});
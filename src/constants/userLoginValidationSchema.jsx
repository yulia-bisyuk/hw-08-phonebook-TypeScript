import * as Yup from 'yup';

export const userLoginValidationSchema = Yup.object({
 userEmail: Yup.string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, '* Email must contain "@" and "." characters and may contain "-" character')
    .required('* Required'),
  userPassword: Yup.string()
    .min(8, '* Minimum eight characters')
    .required('* Required'),
});
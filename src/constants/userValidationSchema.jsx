import * as Yup from 'yup';

export const userValidationSchema = Yup.object({
  userName: Yup.string()
    .required('* Required'),
  userEmail: Yup.string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, '* Email must contain "@" and "." characters and may contain "-" character')
    .required('* Required'),
  userPassword: Yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, '* Minimum eight characters, at least one letter and one number')
    .required('* Required'),
});

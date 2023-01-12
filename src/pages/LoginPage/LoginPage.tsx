import { Formik } from 'formik';
import { userLoginValidationSchema } from 'constants/userLoginValidationSchema';
import { ThemeProvider } from 'styled-components';
import theme from '../../constants/theme';
import { FaUserCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  FormLabel,
  FormInput,
  SubmitBtn,
  ErrorMessage,
} from '../../components/ContactForm/ContactForm.styled';
import {
  PageWrapper,
  PageTitle,
  IconWrapper,
} from 'pages/HomePage/HomePage.styled';
import { useLogInMutation } from 'redux/authentication/authApi';
import AuthRedirect from 'components/AuthRedirect';
import { ResetForm } from 'components/ContactForm/ContactForm';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [logIn] = useLogInMutation();
  const initialValues: LoginFormValues = { email: '', password: '' };
  const handleSubmit = (values: LoginFormValues, { resetForm }: ResetForm) => {
    logIn(values);
    resetForm();
  };

  return (
    <PageWrapper>
      <ThemeProvider theme={theme}>
        <PageTitle>Log in</PageTitle>
        <IconWrapper>
          <IconContext.Provider value={{ color: '#0c005a', size: '30px' }}>
            <FaUserCheck />
          </IconContext.Provider>
        </IconWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={userLoginValidationSchema}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <FormLabel>
                Email
                <FormInput
                  id="email"
                  // name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <ErrorMessage>{formik.errors.email}</ErrorMessage>
                ) : null}
              </FormLabel>

              <FormLabel>
                Password
                <FormInput
                  id="password"
                  // name="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <ErrorMessage>{formik.errors.password}</ErrorMessage>
                ) : null}
              </FormLabel>

              <SubmitBtn type="submit">Log in</SubmitBtn>
            </form>
          )}
        </Formik>
        <AuthRedirect page="/register" text="Register" />
      </ThemeProvider>
    </PageWrapper>
  );
};

export default LoginPage;

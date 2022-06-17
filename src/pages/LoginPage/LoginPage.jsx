import { Formik } from 'formik';
import { userLoginValidationSchema } from 'constants/userLoginValidationSchema';
import { ThemeProvider } from 'styled-components';
import theme from '../../constants/theme';
import { FaUserCheck } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { FormLabel, FormInput, SubmitBtn, ErrorMessage } from '../../components/ContactForm/ContactForm.styled';
import { PageWrapper, PageTitle, IconWrapper } from 'pages/HomePage/HomePage.styled';
import { useLogInMutation } from 'redux/AuthOperations/AuthOperations';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [logIn] = useLogInMutation();
  const navigate = useNavigate();

    const handleSubmit = (values, {resetForm}) => {
      
      logIn(values);
      resetForm();
      navigate('/contacts');

}

    return (
        <PageWrapper>
            <ThemeProvider theme={theme}>
                <PageTitle>Login</PageTitle>
                <IconWrapper>
                <IconContext.Provider value={{ color: '#0c005a', size: "30px" }}>
                    <FaUserCheck />
                    </IconContext.Provider>
                    </IconWrapper>
       <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={userLoginValidationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {formik => (
                   
        <form onSubmit={formik.handleSubmit}>

          <FormLabel htmlFor="email">
            Email
              <FormInput
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
             <ErrorMessage>{formik.errors.email}</ErrorMessage>
           ) : null}
                        </FormLabel>
                        
                        <FormLabel htmlFor="password">
            Password
              <FormInput
                id="password"
                name="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
             <ErrorMessage>{formik.errors.password}</ErrorMessage>
           ) : null}
          </FormLabel>

                            <SubmitBtn type="submit">Login</SubmitBtn>
 
                    </form>
                    
      )
      }
      
                </Formik>
                </ThemeProvider>
</PageWrapper>
    )
};

export default LoginPage;
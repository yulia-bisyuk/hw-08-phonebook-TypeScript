import { Formik } from 'formik';
import { userValidationSchema } from 'constants/userValidationSchema';
import { ThemeProvider } from 'styled-components';
import theme from '../../constants/theme';
import { FaUserPlus } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { FormLabel, FormInput, SubmitBtn, ErrorMessage } from '../../components/ContactForm/ContactForm.styled';
import { PageWrapper, PageTitle, IconWrapper } from 'pages/HomePage/HomePage.styled';


const RegistrationPage = () => {

    const handleSubmit = (values, {resetForm}) => {
        console.log('values');
        console.log(values);
        resetForm();
}

    return (
        <PageWrapper>
            <ThemeProvider theme={theme}>
                <PageTitle>Registration</PageTitle>
                <IconWrapper>
                <IconContext.Provider value={{ color: '#0c005a', size: "30px" }}>
                    <FaUserPlus />
                    </IconContext.Provider>
                    </IconWrapper>
       <Formik
      initialValues={{ userName: '', userEmail: '', userPassword: '' }}
      validationSchema={userValidationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {formik => (
                   
        <form onSubmit={formik.handleSubmit}>

        <FormLabel htmlFor="userName">
          Name
            <FormInput
              id="userName"
              name="userName"
              type="text"
              {...formik.getFieldProps('userName')}
            />
            {formik.touched.userName && formik.errors.userName ? (
             <ErrorMessage>{formik.errors.userName}</ErrorMessage>
           ) : null}
          </FormLabel>
          
          <FormLabel htmlFor="userEmail">
            Email
              <FormInput
                id="userEmail"
                name="userEmail"
                type="email"
                {...formik.getFieldProps('userEmail')}
            />
            {formik.touched.userEmail && formik.errors.userEmail ? (
             <ErrorMessage>{formik.errors.userEmail}</ErrorMessage>
           ) : null}
                        </FormLabel>
                        
                        <FormLabel htmlFor="userPassword">
            Password
              <FormInput
                id="userPassword"
                name="userPassword"
                type="password"
                {...formik.getFieldProps('userPassword')}
            />
            {formik.touched.userPassword && formik.errors.userPassword ? (
             <ErrorMessage>{formik.errors.userPassword}</ErrorMessage>
           ) : null}
          </FormLabel>

                            <SubmitBtn type="submit">Register</SubmitBtn>
 
                    </form>
                    
      )
      }
      
                </Formik>
                </ThemeProvider>
</PageWrapper>
    )
};

export default RegistrationPage;
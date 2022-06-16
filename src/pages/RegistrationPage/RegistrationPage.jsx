import { Formik } from 'formik';
import { userValidationSchema } from 'constants/userValidationSchema';
import { ThemeProvider } from 'styled-components';
import theme from '../../constants/theme';
import { FaUserPlus } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { FormLabel, FormInput, SubmitBtn, ErrorMessage } from '../../components/ContactForm/ContactForm.styled';
import { PageWrapper, PageTitle, IconWrapper } from 'pages/HomePage/HomePage.styled';
import { useCreateUserMutation } from '../../redux/AuthOperations/AuthOperations';
import { addUser } from 'redux/AuthSlice/AuthSlice';
import { useDispatch } from 'react-redux';

const RegistrationPage = () => {
    const dispatch = useDispatch();
  const [createUser] = useCreateUserMutation();
 
    const handleSubmit = async (values, { resetForm }) => {
        console.log('values');
        console.log(values);
        
        try {
    
            await createUser(values)
                // .then(data => console.log(data))
                .then(data => dispatch(addUser(data)));
        }
        catch (error) {
            console.log(error);
      };
     
      resetForm();
      
    };



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
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={userValidationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {formik => (
                   
        <form onSubmit={formik.handleSubmit}>

        <FormLabel htmlFor="name">
          Name
            <FormInput
              id="name"
              name="name"
              type="text"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
             <ErrorMessage>{formik.errors.name}</ErrorMessage>
           ) : null}
          </FormLabel>
          
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
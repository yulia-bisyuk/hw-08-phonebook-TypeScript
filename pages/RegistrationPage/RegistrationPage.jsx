"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formik_1 = require("formik");
const userValidationSchema_1 = require("constants/userValidationSchema");
const styled_components_1 = require("styled-components");
const theme_1 = __importDefault(require("../../constants/theme"));
const fa_1 = require("react-icons/fa");
const react_icons_1 = require("react-icons");
const ContactForm_styled_1 = require("../../components/ContactForm/ContactForm.styled");
const HomePage_styled_1 = require("pages/HomePage/HomePage.styled");
const AuthRedirect_1 = __importDefault(require("components/AuthRedirect"));
const authApi_1 = require("../../redux/authentication/authApi");
const RegistrationPage = () => {
    const [registerUser] = (0, authApi_1.useRegistrationMutation)();
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    const handleSubmit = (values, { resetForm }) => {
        registerUser(values);
        resetForm();
    };
    return (<HomePage_styled_1.PageWrapper>
      <styled_components_1.ThemeProvider theme={theme_1.default}>
        <HomePage_styled_1.PageTitle>Registration</HomePage_styled_1.PageTitle>
        <HomePage_styled_1.IconWrapper>
          <react_icons_1.IconContext.Provider value={{ color: '#0c005a', size: '30px' }}>
            <fa_1.FaUserPlus />
          </react_icons_1.IconContext.Provider>
        </HomePage_styled_1.IconWrapper>
        <formik_1.Formik initialValues={initialValues} validationSchema={userValidationSchema_1.userValidationSchema} onSubmit={(values, actions) => handleSubmit(values, actions)}>
          {formik => (<form onSubmit={formik.handleSubmit}>
              <ContactForm_styled_1.FormLabel>
                Name
                <ContactForm_styled_1.FormInput id="name" 
        // name="name"
        type="text" {...formik.getFieldProps('name')}/>
                {formik.touched.name && formik.errors.name ? (<ContactForm_styled_1.ErrorMessage>{formik.errors.name}</ContactForm_styled_1.ErrorMessage>) : null}
              </ContactForm_styled_1.FormLabel>

              <ContactForm_styled_1.FormLabel>
                Email
                <ContactForm_styled_1.FormInput id="email" 
        // name="email"
        type="email" {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ? (<ContactForm_styled_1.ErrorMessage>{formik.errors.email}</ContactForm_styled_1.ErrorMessage>) : null}
              </ContactForm_styled_1.FormLabel>

              <ContactForm_styled_1.FormLabel htmlFor="password">
                Password
                <ContactForm_styled_1.FormInput id="password" 
        // name="password"
        type="password" {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ? (<ContactForm_styled_1.ErrorMessage>{formik.errors.password}</ContactForm_styled_1.ErrorMessage>) : null}
              </ContactForm_styled_1.FormLabel>

              <ContactForm_styled_1.SubmitBtn type="submit">Register</ContactForm_styled_1.SubmitBtn>
            </form>)}
        </formik_1.Formik>

        <AuthRedirect_1.default page="/login" text="Log in"/>
      </styled_components_1.ThemeProvider>
    </HomePage_styled_1.PageWrapper>);
};
exports.default = RegistrationPage;

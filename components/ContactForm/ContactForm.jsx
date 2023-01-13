"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formik_1 = require("formik");
const contactValidationSchema_1 = require("constants/contactValidationSchema");
const hooks_1 = require("hooks");
const ContactForm_styled_1 = require("./ContactForm.styled");
const contactsApi_1 = require("../../redux/contacts/contactsApi");
const authSelectors_1 = require("../../redux/authentication/authSelectors");
const ContactForm = () => {
    const initialValues = { name: '', number: '' };
    const token = (0, hooks_1.useAppSelector)(authSelectors_1.getToken);
    const [addContact] = (0, contactsApi_1.useAddContactMutation)();
    const { data: contacts } = (0, contactsApi_1.useGetContactsQuery)(token, {
        skip: token === null,
    });
    const handleSubmit = (values, { resetForm }) => {
        if (contacts.some((contact) => contact.name.toLowerCase() === values.name.toLowerCase())) {
            resetForm();
            return alert(`${values.name} is already in contacts`);
        }
        addContact({ token: token, name: values.name, number: values.number });
        resetForm();
    };
    return (<formik_1.Formik initialValues={initialValues} validationSchema={contactValidationSchema_1.contactValidationSchema} onSubmit={(values, actions) => handleSubmit(values, actions)}>
      {formik => (<form onSubmit={formik.handleSubmit}>
          <ContactForm_styled_1.FormLabel>
            Name
            <ContactForm_styled_1.FormInput id="name" type="text" {...formik.getFieldProps('name')}/>
            {formik.touched.name && formik.errors.name && (<ContactForm_styled_1.ErrorMessage>{formik.errors.name}</ContactForm_styled_1.ErrorMessage>)}
          </ContactForm_styled_1.FormLabel>

          <ContactForm_styled_1.FormLabel>
            Number
            <ContactForm_styled_1.FormInput id="number" type="text" {...formik.getFieldProps('number')}/>
            {formik.touched.number && formik.errors.number && (<ContactForm_styled_1.ErrorMessage>{formik.errors.number}</ContactForm_styled_1.ErrorMessage>)}
          </ContactForm_styled_1.FormLabel>

          <ContactForm_styled_1.SubmitBtn type="submit">Add contact</ContactForm_styled_1.SubmitBtn>
        </form>)}
    </formik_1.Formik>);
};
exports.default = ContactForm;

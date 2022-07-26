import { Formik } from 'formik';
import { contactValidationSchema } from 'constants/contactValidationSchema';
import { useSelector } from 'react-redux';
import {
  FormLabel,
  FormInput,
  SubmitBtn,
  ErrorMessage,
} from './ContactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contacts/contactsApi';
import { getToken } from '../../redux/authentication/authSelectors';

const ContactForm = () => {
  const token = useSelector(getToken);
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery(token, {
    skip: token === null,
  });

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      resetForm();
      return alert(`${values.name} is already in contacts`);
    }

    addContact({ token: token, name: values.name, number: values.number });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactValidationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <FormLabel>
            Name
            <FormInput
              id="name"
              name="name"
              type="text"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
            )}
          </FormLabel>

          <FormLabel>
            Number
            <FormInput
              id="number"
              name="number"
              type="text"
              {...formik.getFieldProps('number')}
            />
            {formik.touched.number && formik.errors.number && (
              <ErrorMessage>{formik.errors.number}</ErrorMessage>
            )}
          </FormLabel>

          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;

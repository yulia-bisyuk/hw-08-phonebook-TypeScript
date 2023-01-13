import { Formik } from 'formik';
import { contactValidationSchema } from 'constants/contactValidationSchema';
import { useAppSelector } from 'hooks';
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
import { Contact } from 'types/types';
import { FormValues, ResetForm } from 'types/types';

const ContactForm: React.FC = () => {
  const initialValues: FormValues = { name: '', number: '' };
  const token = useAppSelector(getToken);
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery(token, {
    skip: token === null,
  });

  const handleSubmit = (values: FormValues, { resetForm }: ResetForm) => {
    if (
      contacts.some(
        (contact: Contact) =>
          contact.name.toLowerCase() === values.name.toLowerCase()
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
      initialValues={initialValues}
      validationSchema={contactValidationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <FormLabel>
            Name
            <FormInput
              id="name"
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

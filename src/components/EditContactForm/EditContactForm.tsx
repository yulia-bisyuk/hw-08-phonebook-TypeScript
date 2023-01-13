import { Formik } from 'formik';
import { contactValidationSchema } from 'constants/contactValidationSchema';
import {
  useGetContactsQuery,
  useEditContactMutation,
} from 'redux/contacts/contactsApi';
import {
  InputsWrapper,
  FormLabel,
  FormInput,
  ButtonsWrapper,
  CancelButton,
  ConfirmButton,
} from './EditContactForm.styled';
import { ErrorMessage } from '../ContactForm/ContactForm.styled';
import { useAppSelector } from '../../hooks';
import { getToken } from 'redux/authentication/authSelectors';
import { Contact, FormValues } from 'types/types';

interface EditContactFormProps {
  id: string;
  onClose: () => void;
}

const EditContactForm: React.FC<EditContactFormProps> = ({ id, onClose }) => {
  const [editContact] = useEditContactMutation();
  const token = useAppSelector(getToken);

  const { data: contacts } = useGetContactsQuery(token, {
    skip: token === null,
  });
  const contact = contacts.find((contact: Contact) => contact.id === id);
  const initialValues: FormValues = {
    name: contact.name,
    number: contact.number,
  };

  const handleSubmit = (values: FormValues) => {
    editContact({
      contactId: id,
      token: token,
      name: values.name,
      number: values.number,
    });

    onClose();
  };

  return (
    contact && (
      <Formik
        initialValues={initialValues}
        validationSchema={contactValidationSchema}
        onSubmit={values => handleSubmit(values)}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <InputsWrapper>
              <FormLabel>
                Name
                <FormInput
                  id="name"
                  // name="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                />
              </FormLabel>
              <div>
                {formik.touched.name && formik.errors.name ? (
                  <ErrorMessage>{formik.errors.name}</ErrorMessage>
                ) : null}
              </div>

              <FormLabel>
                Number
                <FormInput
                  id="number"
                  // name="number"
                  type="text"
                  {...formik.getFieldProps('number')}
                />
              </FormLabel>
              <div>
                {formik.touched.number && formik.errors.number ? (
                  <ErrorMessage>{formik.errors.number}</ErrorMessage>
                ) : null}
              </div>
            </InputsWrapper>

            <ButtonsWrapper>
              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>

              <ConfirmButton type="submit">Confirm</ConfirmButton>
            </ButtonsWrapper>
          </form>
        )}
      </Formik>
    )
  );
};

export default EditContactForm;

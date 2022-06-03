import { Formik } from 'formik';
import { validationSchema } from 'constants/validationSchema';
import { FormLabel, FormInput, AddContactBtn, ErrorMessage } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/ContactsSlice/ContactsSlice';

const ContactForm = () => {
  
  const [addContact] = useAddContactMutation();
  const {data: contacts} = useGetContactsQuery();

  const handleSubmit = async ({userName, userNumber}, {resetForm}) => {
    
    if (contacts.some(contact => contact.name.toLowerCase() === userName.toLowerCase()))
    {
      resetForm();
      return alert(`${userName} is already in contacts`);
    }

    try {
      await addContact({ name: userName, phone: userNumber });
    }
    catch (error) {
      console.log(error);
    }

   resetForm();

  };

  return (
    
    <Formik
      initialValues={{ userName: '', userNumber: '' }}
      validationSchema={validationSchema}
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
          
          <FormLabel htmlFor="userNumber">
            Number
              <FormInput
                id="userNumber"
                name="userNumber"
                type="text"
                {...formik.getFieldProps('userNumber')}
            />
            {formik.touched.userNumber && formik.errors.userNumber ? (
             <ErrorMessage>{formik.errors.userNumber}</ErrorMessage>
           ) : null}
          </FormLabel>

        <AddContactBtn type="submit">Add contact</AddContactBtn>
 
      </form>
      )}
      
      </Formik>

  );
};

export default ContactForm;
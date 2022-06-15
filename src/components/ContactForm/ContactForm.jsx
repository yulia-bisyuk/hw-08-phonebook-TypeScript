import { Formik } from 'formik';
import { contactValidationSchema } from 'constants/contactValidationSchema';

import { FormLabel, FormInput, SubmitBtn, ErrorMessage } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/ContactsOperations/ContactsOperations';

const ContactForm = () => {
  
  const [addContact] = useAddContactMutation();
  const {data: contacts} = useGetContactsQuery();

  const handleSubmit = async ({ contactName, contactNumber }, { resetForm }) => {
    
    
    if (contacts.some(contact => contact.name.toLowerCase() === contactName.toLowerCase()))
    {
      resetForm();
      return alert(`${contactName} is already in contacts`);
    }

    try {
      await addContact({ name: contactName, phone: contactNumber });
    }
    catch (error) {
      console.log(error);
    }

   resetForm();

  };

  return (
    
    <Formik
      initialValues={{ contactName: '', contactNumber: '' }}
      validationSchema={contactValidationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {formik => (

        <form onSubmit={formik.handleSubmit}>

        <FormLabel htmlFor="contactName">
          Name
            <FormInput
              id="contactName"
              name="contactName"
              type="text"
              {...formik.getFieldProps('contactName')}
            />
            {formik.touched.contactName && formik.errors.contactName ? (
             <ErrorMessage>{formik.errors.contactName}</ErrorMessage>
           ) : null}
          </FormLabel>
          
          <FormLabel htmlFor="contactNumber">
            Number
              <FormInput
                id="contactNumber"
                name="contactNumber"
                type="text"
                {...formik.getFieldProps('contactNumber')}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? (
             <ErrorMessage>{formik.errors.contactNumber}</ErrorMessage>
           ) : null}
          </FormLabel>

        <SubmitBtn type="submit">Add contact</SubmitBtn>
 
      </form>
      )
      }
      
      </Formik>

  );
};

export default ContactForm;
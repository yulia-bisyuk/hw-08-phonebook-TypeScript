import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { contactValidationSchema } from 'constants/contactValidationSchema';
import { useGetContactsQuery, useEditContactMutation } from 'redux/ContactsOperations/ContactsOperations';
import { InputsWrapper, FormLabel, FormInput, ButtonsWrapper, CancelButton, ConfirmButton } from './EditContactForm.styled';
import { ErrorMessage } from '../ContactForm/ContactForm.styled';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/AuthSlice/AuthSlice';

const EditContactForm = ({ id, onClose }) => {
    const [editContact] = useEditContactMutation();
    const { data: contacts } = useGetContactsQuery();
    // const { data: contact } = useGetContactByIdQuery(id);
    const token = useSelector(getToken);
    const contact = contacts.find(contact => contact.id === id);


    const handleSubmit = (values) => {
        console.log('Edit submit');
        console.log(values);
        
        editContact({
            contactId: id, 
            token: token,
            name: values.name,
            number: values.number
        });
        
        onClose();
}

    return (
      contact &&
             <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={contactValidationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
            {
                    formik => (
                        <form onSubmit={formik.handleSubmit} autoComplete='off'>
                    <InputsWrapper>
                        <FormLabel htmlFor="name">
                            Name
                        <FormInput
                        id="name"
                        name="name"
                        type="text"
                    
                        {...formik.getFieldProps('name')}
                        />
                        </FormLabel>
                            <div>
                {formik.touched.name && formik.errors.name ? (
                <ErrorMessage>{formik.errors.name}</ErrorMessage>
            ) : null}
                            </div>
                        
                        <FormLabel htmlFor="number">
                            Number
                        <FormInput
                            id="number"
                            name="number"
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
                     <CancelButton 
                     type='button'
                     onClick={onClose}
                                >Cancel</CancelButton>
                                
                    <ConfirmButton 
                    type='submit'>Confirm</ConfirmButton>
                </ButtonsWrapper>
            
                </form>)}
                </Formik> 
    )
};

EditContactForm.propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default EditContactForm;
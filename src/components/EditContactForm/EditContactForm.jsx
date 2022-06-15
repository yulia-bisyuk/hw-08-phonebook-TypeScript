import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { contactValidationSchema } from 'constants/contactValidationSchema';
import { useGetContactByIdQuery, useEditContactMutation } from 'redux/ContactsOperations/ContactsOperations';
import { InputsWrapper, FormLabel, FormInput, ButtonsWrapper, CancelButton, ConfirmButton } from './EditContactForm.styled';
import { ErrorMessage } from '../ContactForm/ContactForm.styled';

const EditContactForm = ({ id, onClose }) => {
    const [editContact] = useEditContactMutation();
    const { data: contact } = useGetContactByIdQuery(id);

    const handleSubmit = ({contactName, contactNumber}) => {
     
        editContact({ id: id, 
            name: contactName,
            phone: contactNumber
        });
        
        onClose();
}

    return (
      contact &&
             <Formik
      initialValues={{ contactName: contact.name, contactNumber: contact.phone }}
      validationSchema={contactValidationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
            {
                    formik => (
                        <form onSubmit={formik.handleSubmit} autocomplete='off'>
                    <InputsWrapper>
                        <FormLabel htmlFor="contactName">
                            Name
                        <FormInput
                        id="contactName"
                        name="contactName"
                        type="text"
                    
                        {...formik.getFieldProps('contactName')}
                        />
                        </FormLabel>
                            <div>
                {formik.touched.contactName && formik.errors.contactName ? (
                <ErrorMessage>{formik.errors.contactName}</ErrorMessage>
            ) : null}
                            </div>
                        
                        <FormLabel htmlFor="contactNumber">
                            Number
                        <FormInput
                            id="contactNumber"
                            name="contactNumber"
                            type="text"
                        
                            {...formik.getFieldProps('contactNumber')}
                            />
                        </FormLabel>
                        <div>
                            {formik.touched.contactNumber && formik.errors.contactNumber ? (
             <ErrorMessage>{formik.errors.contactNumber}</ErrorMessage>
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
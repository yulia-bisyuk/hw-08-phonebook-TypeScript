import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { validationSchema } from 'constants/validationSchema';
import { useGetContactByIdQuery, useEditContactMutation } from 'redux/ContactsSlice/ContactsSlice';
import { InputsWrapper, FormLabel, FormInput, ButtonsWrapper, CancelButton, ConfirmButton } from './EditContactForm.styled';
import { ErrorMessage } from '../ContactForm/ContactForm.styled';

const EditContactForm = ({ id, onClose }) => {
    const [editContact] = useEditContactMutation();
    const { data: contact } = useGetContactByIdQuery(id);

    const handleSubmit = ({userName, userNumber}) => {
     
        editContact({ id: id, 
            name: userName,
            phone: userNumber
        });
        
        onClose();
}

    return (
      contact &&
             <Formik
      initialValues={{ userName: contact.name, userNumber: contact.phone }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
            {
                    formik => (
                        <form onSubmit={formik.handleSubmit}>
                    <InputsWrapper>
                        <FormLabel htmlFor="userName">
                            Name
                        <FormInput
                        id="userName"
                        name="userName"
                        type="text"
                    
                        {...formik.getFieldProps('userName')}
                        />
                        </FormLabel>
                            <div>
                {formik.touched.userName && formik.errors.userName ? (
                <ErrorMessage>{formik.errors.userName}</ErrorMessage>
            ) : null}
                            </div>
                        
                        <FormLabel htmlFor="userNumber">
                            Number
                        <FormInput
                            id="userNumber"
                            name="userNumber"
                            type="text"
                        
                            {...formik.getFieldProps('userNumber')}
                            />
                        </FormLabel>
                        <div>
                            {formik.touched.userNumber && formik.errors.userNumber ? (
             <ErrorMessage>{formik.errors.userNumber}</ErrorMessage>
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
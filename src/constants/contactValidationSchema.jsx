import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
  contactName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, '* Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore')
    .required('* Required'),
  contactNumber: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, '* Phone number must be digits and can contain spaces, dashes, parentheses in country code and can start with +')
    .required('* Required'),
  
});

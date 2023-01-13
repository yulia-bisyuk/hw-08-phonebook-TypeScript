"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formik_1 = require("formik");
const contactValidationSchema_1 = require("constants/contactValidationSchema");
const contactsApi_1 = require("redux/contacts/contactsApi");
const EditContactForm_styled_1 = require("./EditContactForm.styled");
const ContactForm_styled_1 = require("../ContactForm/ContactForm.styled");
const hooks_1 = require("../../hooks");
const authSelectors_1 = require("redux/authentication/authSelectors");
const EditContactForm = ({ id, onClose }) => {
    const [editContact] = (0, contactsApi_1.useEditContactMutation)();
    const token = (0, hooks_1.useAppSelector)(authSelectors_1.getToken);
    const { data: contacts } = (0, contactsApi_1.useGetContactsQuery)(token, {
        skip: token === null,
    });
    const contact = contacts.find((contact) => contact.id === id);
    const initialValues = {
        name: contact.name,
        number: contact.number,
    };
    const handleSubmit = (values) => {
        editContact({
            contactId: id,
            token: token,
            name: values.name,
            number: values.number,
        });
        onClose();
    };
    return (contact && (<formik_1.Formik initialValues={initialValues} validationSchema={contactValidationSchema_1.contactValidationSchema} onSubmit={values => handleSubmit(values)}>
        {formik => (<form onSubmit={formik.handleSubmit} autoComplete="off">
            <EditContactForm_styled_1.InputsWrapper>
              <EditContactForm_styled_1.FormLabel>
                Name
                <EditContactForm_styled_1.FormInput id="name" 
        // name="name"
        type="text" {...formik.getFieldProps('name')}/>
              </EditContactForm_styled_1.FormLabel>
              <div>
                {formik.touched.name && formik.errors.name ? (<ContactForm_styled_1.ErrorMessage>{formik.errors.name}</ContactForm_styled_1.ErrorMessage>) : null}
              </div>

              <EditContactForm_styled_1.FormLabel>
                Number
                <EditContactForm_styled_1.FormInput id="number" 
        // name="number"
        type="text" {...formik.getFieldProps('number')}/>
              </EditContactForm_styled_1.FormLabel>
              <div>
                {formik.touched.number && formik.errors.number ? (<ContactForm_styled_1.ErrorMessage>{formik.errors.number}</ContactForm_styled_1.ErrorMessage>) : null}
              </div>
            </EditContactForm_styled_1.InputsWrapper>

            <EditContactForm_styled_1.ButtonsWrapper>
              <EditContactForm_styled_1.CancelButton type="button" onClick={onClose}>
                Cancel
              </EditContactForm_styled_1.CancelButton>

              <EditContactForm_styled_1.ConfirmButton type="submit">Confirm</EditContactForm_styled_1.ConfirmButton>
            </EditContactForm_styled_1.ButtonsWrapper>
          </form>)}
      </formik_1.Formik>));
};
exports.default = EditContactForm;

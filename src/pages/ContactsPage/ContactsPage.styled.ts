import styled from 'styled-components';

const PhonebookTitle = styled.h1`
  color: ${props => props.theme.darkBlue};
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
`;
const ContactsTitle = styled.h1`
  color: ${props => props.theme.darkBlue};
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
`;
const Section = styled.div`
  &:not(:last-child) {
    margin-bottom: 48px;
  }
`;
const Note = styled.div`
  text-align: center;
  color: ${props => props.theme.lightGray};
`;

export { PhonebookTitle, ContactsTitle, Section, Note };

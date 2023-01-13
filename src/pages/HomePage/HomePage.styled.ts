import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  width: 340px;
  height: fit-content;
`;
const PageTitle = styled.h1`
  color: ${props => props.theme.darkBlue};
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;
const InvitationTitle = styled.h2`
  color: ${props => props.theme.darkBlue};
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
`;
const AuthLink = styled(Link)`
  display: block;
  padding: 10px 15px;
  margin-right: auto;
  margin-left: auto;
  :not(:last-child) {
    margin-bottom: 60px;
  }
  text-align: center;
  text-decoration: none;
  width: 148px;
  border-radius: 5px;
  background-color: ${props => props.theme.darkBlue};
  color: white;
  font-size: 16px;
  transition-property: transform;
  transition-duration: 500ms;

  &:hover {
    transform: scale(1.08);
  }
`;
const IconWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
`;
const Text = styled.p`
  color: ${props => props.theme.darkBlue};
  font-size: 18px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;
`;
export { PageWrapper, InvitationTitle, PageTitle, AuthLink, IconWrapper, Text };

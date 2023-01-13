import styled from 'styled-components';

const WelcomeText = styled.p`
  text-align: center;
  font-weight: 600;
  color: ${props => props.theme.darkGrey};
`;

const UserEmail = styled.span`
  margin-bottom: 8px;
  font-size: 18px;
  display: block;
  color: ${props => props.theme.darkBlue};
`;
const LogOutBtn = styled.button`
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: 0.5px solid ${props => props.theme.red};
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.theme.red};
  cursor: pointer;
`;

export { WelcomeText, UserEmail, LogOutBtn };

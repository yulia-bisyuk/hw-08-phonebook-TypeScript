import styled from 'styled-components';

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
  font-size: 14px;
  color: #323643;
  font-weight: 600;
`;
const FormInput = styled.input`
  width: 268px;
  height: 20px;
  padding-left: 6px;
  border: 0.5px solid ${props => props.theme.darkBlue};
  border-radius: 5px;
`;
const ButtonsWrapper = styled.div`
  margin-left: 74px;
  margin-bottom: 16px;
`;
const CancelButton = styled.button`
  margin-right: 8px;
  border: 0.5px solid ${props => props.theme.red};
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.theme.red};
  cursor: pointer;
`;
const ConfirmButton = styled.button`
  border: 0.5px solid ${props => props.theme.green};
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.theme.green};
  cursor: pointer;
`;

export {
  InputsWrapper,
  FormLabel,
  FormInput,
  ButtonsWrapper,
  CancelButton,
  ConfirmButton,
};

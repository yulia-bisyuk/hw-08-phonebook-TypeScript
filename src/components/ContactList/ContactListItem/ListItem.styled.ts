import styled from 'styled-components';

const LiItem = styled.li`
  list-style-type: none;
  width: 340px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.darkBlue};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const ActionButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :not(:first-child) {
    margin-left: 8px;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
`;

export { ActionButton, LiItem, ButtonsWrapper };

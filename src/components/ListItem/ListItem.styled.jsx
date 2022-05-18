import styled from 'styled-components';

const LiItem = styled.li`
  list-style-type: none;
  width: 285px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.darkGray};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const DeleteButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export { DeleteButton, LiItem };
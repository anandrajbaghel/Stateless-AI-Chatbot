import styled from 'styled-components';

const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #283593;
  }

  &:disabled {
    background-color: #909090;
    cursor: not-allowed;
  }
`;

export default Button;

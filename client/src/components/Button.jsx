import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem;
  border-radius: 10px;
  color: white;
  background-color: ${({ theme }) => theme.button};
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  min-width: 35%;
  &:hover {
    background-color: #6145dc;
    transition: 0.5s ease;
  }
`;

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};
export default Button;

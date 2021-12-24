import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: auto;
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-family: ${({ theme }) => theme.fontFamilies.fontFamily};
  font-weight: bold;
  word-wrap: break-word;
  width: 100px; // only for IE8
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
  &:active {
    position: relative;
    top: 2px;
  }
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton { ...rest }>{ children }</StyledButton>;
}

export default Button;
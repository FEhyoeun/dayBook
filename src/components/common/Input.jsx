import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input.attrs({
  required: true,
})`
  border-radius: 5px;
  box-shadow: none;
  height: 1rem;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.brown};
  placeholder: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.input};
  font-family: ${({ theme }) => theme.fontFamilies.fontFamily};
  text-indent: 5px;
  padding: 5px;
  margin: 0px;
  &:focus {
    position: relative;
    top: 2px;
  }
`;

function Input({ children, ...rest }) {
  return <StyledInput { ...rest }>{ children }</StyledInput>;
}

export default Input;
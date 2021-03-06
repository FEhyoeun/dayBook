import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import theme from "components/common/theme";
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import Signup from "./Signup";

const Intro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // let login = {
    //     email,
    //     password
    // }

  }

  const onCheckEnterHandler = (e) => {
    if(e.key === 'Enter') {
      onSubmitHandler()
    }
  }

  const StyledForm = styled.form`
      ${({ theme }) => theme.common.flexCenterColumn};
      height: calc(100% - 70px);
      text-align: center;
      div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        input {
          margin-bottom: 15px;
        }
      }
    `;

  const StyledFormBorder = styled.div`
      background-color: ${({ theme }) => theme.colors.darkBeige};
      border-radius: 5px;
      padding: 10%;
    `;

  return (
    <ThemeProvider theme={ theme }>
      <StyledForm onSubmit={ onSubmitHandler } onKeyPress={ onCheckEnterHandler }>
        <h3>๐ ์ถ์ฑ</h3>
        <StyledFormBorder>
          <div>
            <Input
              type='email'
              value={ email }
              onChange={ onEmailHandler }
              placeholder= '์ด๋ฉ์ผ์ ์๋ ฅํด์ฃผ์ธ์'
            />
            <Input
              type='password'
              value={ password }
              onChange={ onPasswordHandler }
              placeholder= '๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํด์ฃผ์ธ์'
            />
          </div>
          <div>
            <Button type='submit'>๋ก๊ทธ์ธ</Button>
            <Link to="/Signup">
              <Button>ํ์๊ฐ์</Button>
            </Link>
          </div>
          <Routes>
            <Route path="/Signup" element={ Signup() } />
          </Routes>
        </StyledFormBorder>
      </StyledForm>
    </ThemeProvider>
  );
};

export default Intro;
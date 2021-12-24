import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from "components/common/theme";
import Button from 'components/common/Button';
import Input from 'components/common/Input';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onPasswordCheckHandler = (e) => {
    setPasswordCheck(e.currentTarget.value);
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
      div {
        align-items: stretch;
      }
      div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        //align-items: stretch;
        input {
          margin-bottom: 15px;
        }
      }
    `;

  const StyledFormBorder = styled.div`
      width: 450px;
      height: calc(50% - 70px);
      background-color: ${({ theme }) => theme.colors.darkBeige};
      border-radius: 5px;
      padding: 30px;
    `;

  return (
    <ThemeProvider theme={ theme }>
      <StyledForm onSubmit={ onSubmitHandler } onKeyPress={ onCheckEnterHandler }>
        <StyledFormBorder>
          <div>
            <Input
              type='email'
              value={ email }
              onChange={ onEmailHandler }
              placeholder= '이메일을 입력해주세요'
            />
            <Input
              type='password'
              value={ password }
              onChange={ onPasswordHandler }
              placeholder= '비밀번호를 입력해주세요'
            />
            <Input
              type='password'
              value={ passwordCheck }
              onChange={ onPasswordCheckHandler }
              placeholder= '비밀번호를 한 번 더 입력해주세요'
            />
          </div>
          <div>
            <Button>회원가입</Button>
          </div>
        </StyledFormBorder>
      </StyledForm>
    </ThemeProvider>
  );
};

export default Signup;
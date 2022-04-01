import styled from 'styled-components';

const LoginStyled = styled.fieldset`
  border-color: rgb(13,120,22);
  border-radius: 8px;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  padding: 5%;
  width: 30%;
  
  label {
    font-size: 18px;
    margin-top: 32px;
  }

  label input {
    border-radius: 5px;
    margin-left: 5px;
    padding: 8px
  }

  button {
    background-color: rgb(13,120,22);
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    margin-top: 32px;
    padding: 12px
  }

  button:disabled {
    color: rgb(13,100,22);
  }

`;

export default LoginStyled;

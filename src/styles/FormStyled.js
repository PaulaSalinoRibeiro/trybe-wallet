import styled from 'styled-components';

const FormStyled = styled.form`
  background-color: rgb(13,120,22);
  color: #fff;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  padding: 40px;

  input {
    border: none;
    border-radius: 8px;
    margin-left: 3px;
    padding: 6px;
  }

  select {
    border: none;
    border-radius: 8px;
    margin-left: 3px;
    padding: 6px;
  }

  button {
    background-color: rgb(190,120,23);
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    padding: 12px
  }
`;

export default FormStyled;

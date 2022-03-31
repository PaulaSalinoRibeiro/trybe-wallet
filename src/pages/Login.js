import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userAction } from '../actions';

function validate(email, password, func) {
  const MIN_VALUE = 5;
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = password.length > MIN_VALUE;
  const inputs = [validateEmail, validatePassword];
  const isValidade = inputs.every((input) => input === true);
  if (isValidade) {
    func(false);
  } else {
    func(true);
  }
  // ref.: https://github.com/tryber/sd-019-c-live-lectures/blob/lecture/11.5/aula_extra/src/App.js
}

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => { validate(email, password, setIsDisabled); }, [email, password]);

  function handleClick() {
    const { dispatch } = props;
    dispatch(userAction(email));
    history.push('/carteira');
  }

  return (
    <fieldset>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          id="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        type="button"
        disabled={ isDisabled }
        onClick={ () => handleClick() }
      >
        Entrar
      </button>
    </fieldset>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);

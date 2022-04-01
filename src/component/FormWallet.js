import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { expensesThunk } from '../actions';

function FormWallet() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('');
  const arrMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const arrTga = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const dispatch = useDispatch();

  const { wallet: { currencies } } = useSelector((state) => state);
  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          data-testid="value-input"
          type="text"
          name="value"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>

      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          data-testid="description-input"
          type="text"
          name="description"
          value={ description }
          onChange={ (e) => setDescription(e.target.value) }
        />
      </label>

      <label htmlFor="moeda">
        Moeda:
        <select
          id="moeda"
          name="moeda"
          value={ currency }
          onChange={ (e) => setCurrency(e.target.value) }
        >
          {currencies.map((e) => <option key={ e }>{e}</option>)}
        </select>
      </label>

      <label htmlFor="method">
        <select
          id="method"
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ (e) => setMethod(e.target.value) }
        >
          {arrMethod.map((e) => <option key={ e }>{e}</option>)}
        </select>
      </label>

      <label htmlFor="tag">
        <select
          id="tag"
          name="tag"
          data-testid="tag-input"
          value={ tag }
          onChange={ (e) => setTag(e.target.value) }
        >
          {arrTga.map((e) => <option key={ e }>{e}</option>)}
        </select>
      </label>

      <button
        type="button"
        onClick={ () => dispatch(expensesThunk(
          { value, description, currency, method, tag },
        )) }
      >
        Adicionar despesa
      </button>
    </form>
  );
}

export default FormWallet;

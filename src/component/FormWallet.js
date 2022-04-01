import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { expensesThunk } from '../actions';
import FormStyled from '../styles/FormStyled';

function FormWallet() {
  const { wallet: { currencies, expenses } } = useSelector((state) => state);

  const dispatch = useDispatch();

  const init = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  const [formInfo, setFormInfo] = useState(init);

  const arrMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const arrTga = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    dispatch(expensesThunk({ ...formInfo, id: expenses.length }));
    setFormInfo(init);
  };

  return (
    <FormStyled>

      <label htmlFor="value">
        Valor:
        <input
          id="value"
          data-testid="value-input"
          type="text"
          name="value"
          value={ formInfo.value }
          onChange={ (e) => handleChange(e) }
        />
      </label>

      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          data-testid="description-input"
          type="text"
          name="description"
          value={ formInfo.description }
          onChange={ (e) => handleChange(e) }
        />
      </label>

      <label htmlFor="moeda">
        Moeda:
        <select
          id="moeda"
          data-testid="currency-input"
          name="currency"
          value={ formInfo.currency }
          onChange={ (e) => handleChange(e) }
        >
          {currencies.map((e) => <option key={ e }>{e}</option>)}
        </select>
      </label>

      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          data-testid="method-input"
          name="method"
          value={ formInfo.method }
          onChange={ (e) => handleChange(e) }
        >
          {arrMethod.map((e) => <option key={ e }>{e}</option>)}
        </select>
      </label>

      <label htmlFor="tag">
        Categoria:
        <select
          id="tag"
          name="tag"
          data-testid="tag-input"
          value={ formInfo.tag }
          onChange={ (e) => handleChange(e) }
        >
          {arrTga.map((e) => <option key={ e }>{e}</option>)}
        </select>
      </label>

      <button
        type="button"
        onClick={ () => handleClick() }
      >
        Adicionar despesa
      </button>

    </FormStyled>
  );
}

export default FormWallet;

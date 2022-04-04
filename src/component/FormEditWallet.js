import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savedEditExpenseAction } from '../actions';
import FormStyled from '../styles/FormStyled';

function FormEditWallet() {
  const dispatch = useDispatch();
  const { wallet: { currencies, editSelect } } = useSelector((state) => state);
  const { id, value, description, currency, method, tag, exchangeRates } = editSelect;
  const init = {
    id,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates,
  };

  const [formInfo, setFormInfo] = useState(init);

  const arrMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const arrTga = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  const handleChange = (e) => {
    const { target: { name, value: val } } = e;
    setFormInfo((prev) => ({ ...prev, [name]: val }));
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
        onClick={ () => { dispatch(savedEditExpenseAction(formInfo)); } }
      >
        Editar despesa
      </button>

    </FormStyled>
  );
}

export default FormEditWallet;

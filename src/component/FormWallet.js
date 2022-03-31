import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function FormWallet() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [moeda, setMoeda] = useState('');
  const [method, setMethod] = useState('');
  const [tag, setTag] = useState('');
  const arrMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const arrTga = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

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
          value={ moeda }
          onChange={ (e) => setMoeda(e.target.value) }
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
    </form>
  );
}

export default FormWallet;

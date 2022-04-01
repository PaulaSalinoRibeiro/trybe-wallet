import React from 'react';
import { useSelector } from 'react-redux';

function FormTable() {
  const { wallet: { expenses } } = useSelector((state) => state);
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          expenses.length === 0
            ? ''
            : expenses.map((
              { id, value, description, currency, method, tag, exchangeRates },
            ) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{currency}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
                </td>
              </tr>))
        }
      </tbody>
    </table>
  );
}

export default FormTable;

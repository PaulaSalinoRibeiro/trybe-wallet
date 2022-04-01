import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAction } from '../actions';

function FormTable() {
  const { wallet: { expenses } } = useSelector((state) => state);
  const dispatch = useDispatch();
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

      {
        expenses.length > 0
          && (
            <tbody>
              {
                expenses.map((
                  { id, value, description, currency, method, tag, exchangeRates },
                ) => (
                  <tr key={ id }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{currency}</td>
                    <td>{method}</td>
                    <td>{Number(value).toFixed(2)}</td>
                    <td>{(exchangeRates[currency].name).split('/Real Brasileiro')}</td>
                    <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                    <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
                    <td>Real</td>
                    <td>
                      <button
                        type="button"
                        data-testid="edit-btn"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => dispatch(deleteAction(id)) }
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>))
              }
            </tbody>
          )
      }

    </table>
  );
}

export default FormTable;

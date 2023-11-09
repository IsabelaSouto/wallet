import { useSelector } from 'react-redux';
import { GlobalSatetType } from '../services/types';

function Table() {
  const { expenses } = useSelector((state: GlobalSatetType) => state.wallet);

  const expensesTable = expenses.map((expense) => {
    const convertedValues = (Number(expense.value)
    * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2);

    return (
      <tr key={ expense.id }>
        <td>{ expense.description }</td>
        <td>{ expense.tag }</td>
        <td>{ expense.method }</td>
        <td>{ Number(expense.value).toFixed(2) }</td>
        <td>{ expense.exchangeRates[expense.currency].name }</td>
        <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
        <td>{ convertedValues }</td>
        <td>Real</td>
        <button>Editar</button>
        <button>Excluir</button>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </thead>
        <tbody>{ expensesTable }</tbody>
      </table>
    </div>
  );
}

export default Table;

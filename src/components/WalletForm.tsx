import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Dispatch, GlobalSatetType } from '../services/types';
import { fetchApi } from '../services/quotesApi';
import { actionCurrencies, actionExpenses } from '../redux/actions';

const INITIAL_STATE = {
  id: '0',
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

let idEdited = 0;

function WalletForm() {
  const { currencies } = useSelector((state: GlobalSatetType) => state.wallet);
  const [expensesForm, setExpensesForm] = useState(INITIAL_STATE);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    async function fetchCurrencies() {
      const walletCurrencies = await fetchApi();
      dispatch(actionCurrencies(walletCurrencies));
    }
    fetchCurrencies();
  }, []);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setExpensesForm({
      ...expensesForm,
      [name]: value,
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const rates = await fetchApi();
    const saveExpenseData = {
      ...expensesForm,
      id: idEdited++,
      exchangeRates: rates,
    };
    dispatch(actionExpenses(saveExpenseData));
    setExpensesForm(INITIAL_STATE);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Valor:
        <div>
          <input
            type="number"
            name="value"
            value={ expensesForm.value }
            onChange={ handleChange }
            data-testid="value-input"
          />
        </div>
      </label>
      <label>
        Descrição da despesa
        <div>
          <input
            name="description"
            data-testid="description-input"
            value={ expensesForm.description }
            onChange={ handleChange }
          />
        </div>
      </label>
      <label>
        Moeda
        <select
          name="currency"
          data-testid="currency-input"
          value={ expensesForm.currency }
          onChange={ handleChange }
        >
          {currencies.map((coin, index) => (
            <option key={ index } value={ coin }>{ coin }</option>
          ))}
        </select>
      </label>
      <label>
        Método de Pagamento
        <select
          data-testid="method-input"
          name="method"
          value={ expensesForm.method }
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label>
        Categoria
        <select
          data-testid="tag-input"
          name="tag"
          value={ expensesForm.tag }
          onChange={ handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Dispatch, GlobalSatetType } from '../services/types';
import { fetchquotesApi } from '../services/quotesApi';
import { requestFetchSuccessful } from '../redux/actions';

function WalletForm() {
  const INITIAL_STATE = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  const { currencies } = useSelector((state: GlobalSatetType) => state.wallet);
  const [expensesData, setExpensesData] = useState(INITIAL_STATE);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setExpensesData({ ...expensesData, [name]: value });
  };

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    async function fetchCurrencies() {
      const walletCurrencies = await fetchquotesApi();
      dispatch(requestFetchSuccessful(walletCurrencies));
    }
    fetchCurrencies();
  }, []);

  return (
    <form>
      <label>
        Valor:
        <div>
          <input
            type="number"
            name="value"
            value={ expensesData.value }
            onChange={ (e) => handleChange(e) }
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
          />
        </div>
      </label>
      <label>
        Moeda
        <select
          name="currency"
          data-testid="currency-input"
          value={ expensesData.currency }
          onChange={ (e) => handleChange(e) }
        >
          {currencies.map((coin, index) => (
            <option key={ index } value={ coin }>{ coin }</option>
          ))}
        </select>
      </label>
      <label>
        Método de Pagamento
        <select data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label>
        Categoria
        <select data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <button
        type="submit"
        // onClick={  }
      >
        Adicionar despesa
      </button>
    </form>
  );
}

export default WalletForm;

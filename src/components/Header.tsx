import { useSelector } from 'react-redux';
import { GlobalSatetType } from '../services/types';

function Header() {
  const { email } = useSelector(({ user }: GlobalSatetType) => user);
  const { expenses } = useSelector(({ wallet }: GlobalSatetType) => wallet);

  const totalExpenses = expenses.reduce((totalCost, actualCost) => {
    return totalCost
    + Number(actualCost.value)
    * Number(actualCost.exchangeRates[actualCost.currency].ask);
  }, 0);

  return (
    <div>
      <p>Email:</p>
      <p
        data-testid="email-field"
      >
        {email}
      </p>
      <p>Despesa Total:</p>
      <h3 data-testid="total-field">
        { totalExpenses.toFixed(2) }
      </h3>
      <h3
        data-testid="header-currency-field"
      >
        BRL
      </h3>
    </div>
  );
}

export default Header;

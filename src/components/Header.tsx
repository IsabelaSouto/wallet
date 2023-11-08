import { useSelector } from 'react-redux';
import { GlobalSatetType } from '../services/types';

function Header() {
  const email = useSelector(({ user }: GlobalSatetType) => user.email);
  // console.log(email);
  const expenses = useSelector(({ wallet }: GlobalSatetType) => wallet.expenses);

  return (
    <div>
      <p
        data-testid="email-field"
      >
        {email}
      </p>
      <p>Despesa Total</p>
      <h3 data-testid="total-field">
        {expenses}
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

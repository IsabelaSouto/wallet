import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserType = {
  email: string,
  password: string,
};

export type ActionUserType = {
  type: string,
  payload: string,
};

export type ActionExpenseType = {
  type: string,
  payload: string,
};

export type WalletType = {
  currencies: string[],
  expenses: ExpensesType[],
};

export type ExpensesType = {
  id: string,
  value: string,
  currency: CurrencyType,
  method: string,
  tag: string,
  description: string,
  exchangeType: string,
  exchangeRates: { [currency in CurrencyType]: ExchangeRatesType },
};

export type CurrencyType = 'USD' | 'ARS' | 'AUD' | 'BTC' | 'CAD' | 'CHF' | 'XRP' | 'CNY' |
'DOGE' | 'ETH' | 'EUR' | 'GBP' | 'ILS' | 'JPY' | 'LTC';

export type ExchangeRatesType = {
  code:'',
  codein:'',
  name:'',
  high:'',
  low:'',
  varBid:'',
  pctChange:'',
  bid:'',
  ask:'',
  timestamp:'',
  create_date:'',
};

export type GlobalSatetType = {
  user: {
    email: string,
    password: string,
  },
  wallet: {
    currencies: string[],
    expenses: ExpensesType[],
  },
};

export type Dispatch = ThunkDispatch<GlobalSatetType, null, AnyAction>;

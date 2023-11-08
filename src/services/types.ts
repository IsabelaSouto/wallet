import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserType = {
  email: string,
  password: string,
};

export type WalletType = {
  isFetching: boolean,
  errorMessage: string,
  currencies: string[],
  expenses: ExpensesType[],
  editor: boolean,
  idToEdit: number,
};

export type ExpensesType = {
  id: number,
  value: string,
  currency: CurrencyType,
  method: string,
  tag: string,
  description: string,
  exchangeType: string,
  exchangeRates: { [currency in CurrencyType]: Exchange },
};

export type CurrencyType = 'USD' | 'ARS' | 'AUD' | 'BTC' | 'CAD' | 'CHF' | 'XRP' | 'CNY' |
'DOGE' | 'ETH' | 'EUR' | 'GBP' | 'ILS' | 'JPY' | 'LTC';

export type Exchange = {
  user: {
    code: CurrencyType,
    email: string, codein: string,
  },
  name: string,
  high: string,
  low: string,
  varBid: string,
  pctChange: string,
  bid: string,
  ask: string,
  timestamp: string,
  create_date: string,
};

export type GlobalSatetType = {
  user: UserType,
  wallet: WalletType,
};

export type ReduxState = {
  isFetching: boolean,
  imageURL: string,
  errorMessage: string,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

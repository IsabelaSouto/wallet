import {
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  REQUEST_FAILED,
  NEW_EXPENSE } from '../actions';
import { WalletType, ActionExpenseType } from '../../services/types';

const INITIAL_STATE: WalletType = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action: ActionExpenseType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        currencies: '',
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        currencies: action.payload,
      };

    case NEW_EXPENSE:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          action.payload,
        ],
      };

    case REQUEST_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        currencies: '',
      };

    default:
      return state;
  }
}

export default walletReducer;

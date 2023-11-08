import { WalletType } from '../../services/types';
import { ExpenseType } from '../actions';

const INITIAL_STATE: WalletType = {
  expenses: 0,
};

const walletReducer = (state = INITIAL_STATE, action: ExpenseType) => {
  switch (action.type) {
    case 'TOTAL_EXPENSES':
      return {
        ...state,
        expenses: action.payload,
      };
    default: return state;
  }
};

export default walletReducer;

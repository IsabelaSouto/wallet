import { ExpenseType, REQUEST_STARTED,
  REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions';
import { WalletType } from '../../services/types';

const INITIAL_STATE: WalletType = {
  isFetching: false,
  errorMessage: '',
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function walletReducer(state = INITIAL_STATE, action: ExpenseType) {
  switch (action.type) {
    case 'TOTAL_EXPENSES':
      return {
        ...state,
        expenses: action.payload,
      };

    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        currencies: '',
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        currencies: action.payload,
        errorMessage: '',
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        currencies: '',
      };

    default:
      return state;
  }
}

export default walletReducer;

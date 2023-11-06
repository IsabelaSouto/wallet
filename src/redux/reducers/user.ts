import { UserType } from '../../services/types';
import { EmailType } from '../actions/index';

const INITIAL_STATE: UserType = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action: EmailType) => {
  switch (action.type) {
    case 'EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default: return state;
  }
};

export default userReducer;

import { UserType, ActionUserType } from '../../services/types';

const INITIAL_STATE: UserType = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action: ActionUserType) => {
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

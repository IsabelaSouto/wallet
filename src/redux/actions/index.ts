import { fetchquotesApi } from '../../services/quotesApi';
import { Dispatch } from '../../services/types';

export type EmailType = {
  type: string,
  payload: string,
};

export type ExpenseType = {
  type: string,
  payload: string,
};

export const actionUser = (email: string) => {
  return {
    type: 'EMAIL',
    payload: email,
  };
};

// export const actionExpenses = (expenses: number) => {
//   return {
//     type: 'TOTAL_EXPENSES',
//     payload: expenses,
//   };
// };

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function requestFetchStarted() {
  return { type: REQUEST_STARTED };
}

export function requestFetchSuccessful(fetchApi: object) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: Object.keys(fetchApi),
  };
}

export function requestFetchFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchquotes() {
  return async (dispatch: Dispatch) => {
    dispatch(requestFetchStarted());
    try {
      const api = await fetchquotesApi();
      dispatch(requestFetchSuccessful(api));
    } catch (error: any) {
      dispatch(requestFetchFailed(error.message));
    }
  };
}

import { fetchApi } from '../../services/quotesApi';
import { Dispatch } from '../../services/types';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const actionUser = (email: string) => {
  return {
    type: 'EMAIL',
    payload: email,
  };
};

export function requestStarted() {
  return { type: REQUEST_STARTED };
}

export function actionCurrencies(actionFetchApi: object) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: Object.keys(actionFetchApi),
  };
}

export const actionExpenses = (expenses: object) => {
  return {
    type: ADD_EXPENSE,
    payload: expenses,
  };
};

export const actionRemoveExpenses = (expenses: object) => {
  return {
    type: REMOVE_EXPENSE,
    payload: expenses,
  };
};

export function requestFetchFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchquotes() {
  return async (dispatch: Dispatch) => {
    dispatch(requestStarted());
    try {
      const api = await fetchApi();
      dispatch(actionCurrencies(api));
    } catch (error: any) {
      dispatch(requestFetchFailed(error.message));
    }
  };
}

export type EmailType = {
  type: string,
  payload: string,
};

export type ExpenseType = {
  type: string,
  payload: number,
};

export const actionUser = (email: string) => {
  return {
    type: 'EMAIL',
    payload: email,
  };
};

export const actionExpenses = (expenses: number) => {
  return {
    type: 'TOTAL_EXPENSES',
    payload: expenses,
  };
};

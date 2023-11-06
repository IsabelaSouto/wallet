export type EmailType = {
  type: string,
  payload: string,
};

export const actionUser = (email: string) => {
  return {
    type: 'EMAIL',
    payload: email,
  };
};

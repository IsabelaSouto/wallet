export type UserType = {
  email: string;
  password: string,
};

export type WalletType = {
  expenses: number;
};

export type GlobalSatetType = {
  user: UserType,
  wallet: WalletType,
};

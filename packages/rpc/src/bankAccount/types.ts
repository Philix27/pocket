export const BankAccountRoute = {
  base: "bank_account",
  get_primary_account: "/get_primary_account",
  get_all: "/",
  add: "/",
  delete: "/",
};

export interface IBankAccount {
  get_primary_account(
    params: IBankAccount_GetPrimaryAcctParams,
  ): Promise<IBankAccount_GetPrimaryAcctRs>;

  get_all(params: IBankAccount_GetAllParams): Promise<IBankAccount_GetAllRs>;

  add(body: IBankAccount_AddRq): Promise<IBankAccount_AddRs>;

  delete(body: IBankAccount_DeleteRq): Promise<IBankAccount_DeleteRs>;
}

export type IBankAccount_GetPrimaryAcctParams = { walletAddress: string };
export type IBankAccount_GetPrimaryAcctRs = {
  data?: {
    bankName: string;
    accountName: string;
    accountNo: string;
  };
};

export type IBankAccount_GetAllParams = { walletAddress: string };
export type IBankAccount_GetAllRs = {
  data?: {
    bankName: string;
    accountName: string;
    accountNo: string;
  }[];
};

export type IBankAccount_AddRq = {
  bankName: string;
  accountName: string;
  accountNo: string;
};
export type IBankAccount_AddRs = {
  data: {
    msg: string;
  };
};

export type IBankAccount_DeleteRq = {};
export type IBankAccount_DeleteRs = {
  data: {
    id: string;
    msg: string;
  };
};

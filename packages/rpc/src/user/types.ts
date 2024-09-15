export const UserRoute = {
  base: "/user",
  get_info: "/get_info",
  verify_nin: "/verify_nin",
  verify_bvn: "/verify_bvn",
  verify_phone: "/verify_phone",
  verify_email: "/verify_email",
  get_bank_accounts: "/get_bank_accounts",
  set_transaction_pin: "/set_transaction_pin",
  verify_transaction_pin: "/verify_transaction_pin",
};

export interface IUser {
  get_info(params: IUserGetInfoRqParam): Promise<IUserGetInfoRsBody>;

  verify_nin(body: IUser_VerifyNinRq): Promise<IUser_VerifyNinRs>;

  verify_bvn(body: IUser_VerifyBvnRq): Promise<IUser_VerifyBvnRs>;

  verify_phone(body: IUser_VerifyPhoneRq): Promise<IUser_VerifyPhoneRs>;

  verify_email(body: IUser_VerifyEmailRq): Promise<IUser_VerifyEmailRs>;

  set_transaction_pin(
    body: IUser_SetTransactionPinRq,
  ): Promise<IUser_SetTransactionPinRs>;

  verify_transaction_pin(
    body: IUser_VerifyTransactionPinRq,
  ): Promise<IUser_VerifyTransactionPinRs>;
}

export type IUserGetInfoRqParam = { walletAddress: string };
export type IUserGetInfoRsBody = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  bvn?: string;
  nin?: string;
  dob?: string;
  address1?: string;
  address2?: string;
};

export type IUser_GetInfo = {
  reqBody: {};
  pathParam: {};
};

export type IUser_VerifyNinRq = {
  nin: string;
  walletAddress: string;
};
export type IUser_VerifyNinRs = {};

export type IUser_VerifyBvnRq = {
  bvn: string;
  walletAddress: string;
};
export type IUser_VerifyBvnRs = {};

export type IUser_VerifyPhoneRq = {
  phone: string;
  walletAddress: string;
};
export type IUser_VerifyPhoneRs = {};

export type IUser_VerifyEmailRq = {
  email: string;
  walletAddress: string;
};
export type IUser_VerifyEmailRs = {};

export type IUser_SetTransactionPinRq = {
  pin: string;
  walletAddress: string;
};
export type IUser_SetTransactionPinRs = {};

export type IUser_VerifyTransactionPinRq = {
  pin: string;
  walletAddress: string;
};
export type IUser_VerifyTransactionPinRs = {};

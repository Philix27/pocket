import axios from "axios";

export const UserRoute = {
  get_info: "/get_info",
  verify_nin: "/verify_nin",
  verify_bvn: "/verify_bvn",
  verify_phone: "/verify_phone",
  verify_email: "/verify_email",
  get_bank_accounts: "/get_bank_accounts",
  set_transaction_pin: "/set_transaction_pin",
  verify_transaction_pin: "/verify_transaction_pin",
};
export interface IUserController {}

export type IVerifyPhoneDto = {
  phone: string;
  sessionId?: string;
};

export type IGetUserInfoResponse = {
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

export interface IBankAccount {
  get_info(address: string): Promise<IGetUserInfoResponse>;
  verify_nin(): Promise<IGetUserInfoResponse>;
  verify_bvn(): Promise<IGetUserInfoResponse>;
  verify_phone(): Promise<IGetUserInfoResponse>;
  verify_email(): Promise<IGetUserInfoResponse>;
  get_bank_accounts(): Promise<IGetUserInfoResponse>;
  set_transaction_pin(): Promise<IGetUserInfoResponse>;
  verify_transaction_pin(): Promise<IGetUserInfoResponse>;
}

export class UserRpc implements IBankAccount {
  url = "/user";
  async get_info(address: string): Promise<IGetUserInfoResponse> {
    const result = await axios.get(this.url + UserRoute.get_info);
    return result.data;
  }

  verify_nin(): Promise<IGetUserInfoResponse> {
    throw new Error("Method not implemented.");
  }
  verify_bvn(): Promise<IGetUserInfoResponse> {
    throw new Error("Method not implemented.");
  }
  verify_phone(): Promise<IGetUserInfoResponse> {
    throw new Error("Method not implemented.");
  }
  verify_email(): Promise<IGetUserInfoResponse> {
    throw new Error("Method not implemented.");
  }
  get_bank_accounts(): Promise<IGetUserInfoResponse> {
    throw new Error("Method not implemented.");
  }
  set_transaction_pin(): Promise<IGetUserInfoResponse> {
    throw new Error("Method not implemented.");
  }
  verify_transaction_pin(): Promise<IGetUserInfoResponse> {
    throw new Error("Method not implemented.");
  }
}

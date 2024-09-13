import axios from "axios";
import {
  UserRoute,
  IUser,
  IUser_SetTransactionPinRs,
  IUser_VerifyBvnRs,
  IUser_VerifyEmailRs,
  IUser_VerifyNinRs,
  IUser_VerifyPhoneRs,
  IUser_VerifyTransactionPinRs,
  IUserGetInfoRsBody,
  IUser_SetTransactionPinRq,
  IUser_VerifyBvnRq,
  IUser_VerifyEmailRq,
  IUser_VerifyNinRq,
  IUser_VerifyPhoneRq,
  IUser_VerifyTransactionPinRq,
  IUserGetInfoRqParam,
} from "./types";

export class UserRpc implements IUser {
  url = "/user";

  async get_info(params: IUserGetInfoRqParam): Promise<IUserGetInfoRsBody> {
    const res = await axios.get(this.url + UserRoute.get_info, {
      params,
    });
    return res.data;
  }

  async verify_nin(body: IUser_VerifyNinRq): Promise<IUser_VerifyNinRs> {
    const res = await axios.post(this.url + UserRoute.verify_nin, body);
    return res.data;
  }

  async verify_bvn(body: IUser_VerifyBvnRq): Promise<IUser_VerifyBvnRs> {
    const res = await axios.post(this.url + UserRoute.verify_bvn, body);
    return res.data;
  }

  async verify_phone(body: IUser_VerifyPhoneRq): Promise<IUser_VerifyPhoneRs> {
    const res = await axios.post(this.url + UserRoute.verify_phone, body);
    return res.data;
  }

  async verify_email(body: IUser_VerifyEmailRq): Promise<IUser_VerifyEmailRs> {
    const res = await axios.post(this.url + UserRoute.verify_email);
    return res.data;
  }

  async set_transaction_pin(
    body: IUser_SetTransactionPinRq,
  ): Promise<IUser_SetTransactionPinRs> {
    const res = await axios.post(this.url + UserRoute.set_transaction_pin);
    return res.data;
  }

  async verify_transaction_pin(
    body: IUser_VerifyTransactionPinRq,
  ): Promise<IUser_VerifyTransactionPinRs> {
    const res = await axios.post(this.url + UserRoute.verify_transaction_pin);
    return res.data;
  }
}

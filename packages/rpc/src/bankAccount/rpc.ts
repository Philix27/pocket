import axios from "axios";
import {
  BankAccountRoute,
  IBankAccount,
  IBankAccount_AddRq,
  IBankAccount_AddRs,
  IBankAccount_DeleteRq,
  IBankAccount_DeleteRs,
  IBankAccount_GetAllParams,
  IBankAccount_GetAllRs,
  IBankAccount_GetPrimaryAcctParams,
  IBankAccount_GetPrimaryAcctRs,
} from "./types";

export class BankAccountRpc implements IBankAccount {
  url = "/bankAccount";

  async get_primary_account(
    params: IBankAccount_GetPrimaryAcctParams,
  ): Promise<IBankAccount_GetPrimaryAcctRs> {
    const res = await axios.get(
      this.url + BankAccountRoute.get_primary_account,
      {
        params,
      },
    );
    return res.data;
  }

  async get_all(
    params: IBankAccount_GetAllParams,
  ): Promise<IBankAccount_GetAllRs> {
    const res = await axios.get(this.url + BankAccountRoute.get_all, {
      params,
    });
    return res.data;
  }

  async add(
    body: IBankAccount_AddRq, // }
  ): Promise<IBankAccount_AddRs> {
    const res = await axios.post(this.url + BankAccountRoute.add, body);
    return res.data;
  }

  async delete(body: IBankAccount_DeleteRq): Promise<IBankAccount_DeleteRs> {
    const res = await axios.post(this.url + BankAccountRoute.delete, body);
    return res.data;
  }
}

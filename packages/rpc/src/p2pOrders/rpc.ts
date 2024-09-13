import axios from "axios";
import {
  P2pOrdersRoute,
  IP2pOrders,
  IP2pOrders_AddRq,
  IP2pOrders_AddRs,
  IP2pOrders_DeleteRq,
  IP2pOrders_DeleteRs,
  IP2pOrders_GetAllParams,
  IP2pOrders_GetAllRs,
  IP2pOrders_GetPrimaryAcctParams,
  IP2pOrders_GetPrimaryAcctRs,
} from "./types";

export class P2pOrdersRpc implements IP2pOrders {
  url = "/bankAccount";

  async get_primary_account(
    params: IP2pOrders_GetPrimaryAcctParams,
  ): Promise<IP2pOrders_GetPrimaryAcctRs> {
    const res = await axios.get(
      this.url + P2pOrdersRoute.get_primary_account,
      {
        params,
      },
    );
    return res.data;
  }

  async get_all(
    params: IP2pOrders_GetAllParams,
  ): Promise<IP2pOrders_GetAllRs> {
    const res = await axios.get(this.url + P2pOrdersRoute.get_all, {
      params,
    });
    return res.data;
  }

  async add(
    body: IP2pOrders_AddRq, // }
  ): Promise<IP2pOrders_AddRs> {
    const res = await axios.post(this.url + P2pOrdersRoute.add, body);
    return res.data;
  }

  async delete(body: IP2pOrders_DeleteRq): Promise<IP2pOrders_DeleteRs> {
    const res = await axios.post(this.url + P2pOrdersRoute.delete, body);
    return res.data;
  }
}

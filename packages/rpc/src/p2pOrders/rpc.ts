import axios from "axios";
import {
  P2pOrdersRoute,
  IP2pOrders,
  IP2pOrders_GetAllParams,
  IP2pOrders_GetAllRs,
  IP2pOrders_GetOneParams,
  IP2pOrders_GetOneRs,
  IP2pOrders_CreateRq,
  IP2pOrders_CreateRs,
  IP2pOrders_UpdateRq,
  IP2pOrders_UpdateRs,
} from "./types";

export class P2pOrdersRpc implements IP2pOrders {
  async get_one(params: IP2pOrders_GetOneParams): Promise<IP2pOrders_GetOneRs> {
    const res = await axios.get(P2pOrdersRoute.base + P2pOrdersRoute.get_one, {
      params,
    });
    return res.data;
  }

  async get_all(params: IP2pOrders_GetAllParams): Promise<IP2pOrders_GetAllRs> {
    const res = await axios.get(P2pOrdersRoute.base + P2pOrdersRoute.get_all, {
      params,
    });
    return res.data;
  }

  async create(body: IP2pOrders_CreateRq): Promise<IP2pOrders_CreateRs> {
    const res = await axios.post(
      P2pOrdersRoute.base + P2pOrdersRoute.create,
      body,
    );
    return res.data;
  }

  async update(body: IP2pOrders_UpdateRq): Promise<IP2pOrders_UpdateRs> {
    const res = await axios.post(
      P2pOrdersRoute.base + P2pOrdersRoute.update,
      body,
    );
    return res.data;
  }
}

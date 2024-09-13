import axios from "axios";
import {
  QuickSwapRoute,
  IQuickSwap,
  IQuickSwap_BuyRs,
  IQuickSwap_GetRatesRs,
  IQuickSwap_GetTransactionsRs,
  IQuickSwap_SellRs,
  IQuickSwap_BuyRq,
  IQuickSwap_GetRatesParams,
  IQuickSwap_GetTransactionsParams,
  IQuickSwap_SellRq,
} from "./types";

export class QuickSwapRpc implements IQuickSwap {
  async get_rates(
    params: IQuickSwap_GetRatesParams,
  ): Promise<IQuickSwap_GetRatesRs> {
    const res = await axios.get(
      QuickSwapRoute.base + QuickSwapRoute.get_rates,
      {
        params,
      },
    );
    return res.data;
  }

  async get_transactions(
    params: IQuickSwap_GetTransactionsParams,
  ): Promise<IQuickSwap_GetTransactionsRs> {
    const res = await axios.get(
      QuickSwapRoute.base + QuickSwapRoute.get_transactions,
      {
        params,
      },
    );
    return res.data;
  }

  async buy(body: IQuickSwap_BuyRq): Promise<IQuickSwap_BuyRs> {
    const res = await axios.post(
      QuickSwapRoute.base + QuickSwapRoute.buy,
      body,
    );
    return res.data;
  }
  async sell(body: IQuickSwap_SellRq): Promise<IQuickSwap_SellRs> {
    const res = await axios.post(
      QuickSwapRoute.base + QuickSwapRoute.sell,
      body,
    );
    return res.data;
  }
}

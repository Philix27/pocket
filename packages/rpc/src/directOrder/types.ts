// import { $Enums } from "@repo/db";

export const QuickSwapRoute = {
  base: "/quick-swap",
  get_rates: "/get_rates",
  get_transactions: "/get_transactions",
  // get_quick_orders: "/get_quick_orders",
  buy: "/buy",
  sell: "/sell",
};

export interface IDirectOrder {
  get_rates(params: IQuickSwap_GetRatesParams): Promise<IQuickSwap_GetRatesRs>;

  get_transactions(
    params: IQuickSwap_GetTransactionsParams,
  ): Promise<IQuickSwap_GetTransactionsRs>;

  buy(body: IQuickSwap_BuyRq): Promise<IQuickSwap_BuyRs>;

  sell(body: IQuickSwap_SellRq): Promise<IQuickSwap_SellRs>;
}

export type IQuickSwap_GetRatesParams = { walletAddress: string };
export type IQuickSwap_GetRatesRs = {
  data?: {
    id: string;
    created_at: Date;
    updated_at: Date;
    currency: string;
    symbol: string;
  }[];
};

export type IQuickSwap_GetTransactionsParams = {
  userId: string;
  limit?: number;
};
export type IQuickSwap_GetTransactionsRs = {
  data?: {
    transactionHash: string;
    description: string;
    category: string;
    status: string;
    // category: $Enums.TransactionCategory;
    // status: $Enums.TransactionStatus;
  }[];
};

export type IQuickSwap_BuyRq = {
  amount: number;
  user_id: string;
  status: "COMPLETED" | "PENDING" | "FAILED";
};
export type IQuickSwap_BuyRs = {};

export type IQuickSwap_SellRq = {};
export type IQuickSwap_SellRs = {};

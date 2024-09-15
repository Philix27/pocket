export const QuickSwapRoute = {
  base: "/quick-swap",
  get_rates: "/get_rates",
  get_transactions: "/get_transactions",
  // get_quick_orders: "/get_quick_orders",
  buy: "/buy",
  sell: "/sell",
};

export interface IQuickSwap {
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

export type IQuickSwap_GetTransactionsParams = { walletAddress: string };
export type IQuickSwap_GetTransactionsRs = {
  data?: {
    bankName: string;
    accountName: string;
    accountNo: string;
  }[];
};

export type IQuickSwap_BuyRq = {};
export type IQuickSwap_BuyRs = {};

export type IQuickSwap_SellRq = {};
export type IQuickSwap_SellRs = {};

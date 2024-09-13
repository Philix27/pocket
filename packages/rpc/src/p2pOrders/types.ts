export const P2pOrdersRoute = {
  get_primary_account: "/get_primary_account",
  get_all: "/get_all",
  add: "/add",
  delete: "/delete",
};

export interface IP2pOrders {
  get_primary_account(
    params: IP2pOrders_GetPrimaryAcctParams,
  ): Promise<IP2pOrders_GetPrimaryAcctRs>;

  get_all(params: IP2pOrders_GetAllParams): Promise<IP2pOrders_GetAllRs>;

  add(body: IP2pOrders_AddRq): Promise<IP2pOrders_AddRs>;

  delete(body: IP2pOrders_DeleteRq): Promise<IP2pOrders_DeleteRs>;
}

export type IP2pOrders_GetPrimaryAcctParams = { walletAddress: string };
export type IP2pOrders_GetPrimaryAcctRs = {
  data?: {
    bankName: string;
    accountName: string;
    accountNo: string;
  };
};

export type IP2pOrders_GetAllParams = { walletAddress: string };
export type IP2pOrders_GetAllRs = {
  data?: {
    bankName: string;
    accountName: string;
    accountNo: string;
  }[];
};

export type IP2pOrders_AddRq = {};
export type IP2pOrders_AddRs = {};

export type IP2pOrders_DeleteRq = {};
export type IP2pOrders_DeleteRs = {};

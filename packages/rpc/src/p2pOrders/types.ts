export const P2pOrdersRoute = {
  base: "/p2p_orders",
  get_one: "/get_one",
  get_all: "/get_all",
  create: "/create",
  update: "/update",
};

export interface IP2pOrders {
  get_one(params: IP2pOrders_GetOneParams): Promise<IP2pOrders_GetOneRs>;

  get_all(params: IP2pOrders_GetAllParams): Promise<IP2pOrders_GetAllRs>;

  create(body: IP2pOrders_CreateRq): Promise<IP2pOrders_CreateRs>;

  update(body: IP2pOrders_UpdateRq): Promise<IP2pOrders_UpdateRs>;
}

export type IP2pOrders_GetOneParams = { walletAddress: string };
export type IP2pOrders_GetOneRs = {
  data?: {
    bankName: string;
    accountName: string;
    accountNo: string;
  };
};

export type IP2pOrders_GetAllParams = { walletAddress: string };
export type IP2pOrders_GetAllRs = {
  data?: {}[];
};

export type IP2pOrders_CreateRq = {};
export type IP2pOrders_CreateRs = {};

export type IP2pOrders_UpdateRq = {};
export type IP2pOrders_UpdateRs = {};

export const P2pAdsRoute = {
  base: "/p2p-ads",
  get_one: "/get_one",
  get_all: "/get_all",
  create: "/create",
  update: "/update",
  delete: "/delete",
};

export interface IP2pAds {
  get_one(params: IP2pAds_GetOneParams): Promise<IP2pAds_GetOneRs>;

  get_all(params: IP2pAds_GetAllParams): Promise<IP2pAds_GetAllRs>;

  create(body: IP2pAds_CreateRq): Promise<IP2pAds_CreateRs>;

  update(body: IP2pAds_UpdateRq): Promise<IP2pAds_UpdateRs>;

  delete(body: IP2pAds_DeleteRq): Promise<IP2pAds_DeleteRs>;
}

export type IP2pAds_GetOneParams = { walletAddress: string };
export type IP2pAds_GetOneRs = {
  data?: {
    bankName: string;
    accountName: string;
    accountNo: string;
  };
};

export type IP2pAds_GetAllParams = { walletAddress: string };
export type IP2pAds_GetAllRs = {
  data?: {
    bankName: string;
    accountName: string;
    accountNo: string;
  }[];
};

export type IP2pAds_CreateRq = {};
export type IP2pAds_CreateRs = {};

export type IP2pAds_UpdateRq = {};
export type IP2pAds_UpdateRs = {};

export type IP2pAds_DeleteRq = {};
export type IP2pAds_DeleteRs = {};

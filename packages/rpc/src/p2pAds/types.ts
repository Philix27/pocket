export const P2pAdsRoute = {
  get_primary_account: "/get_primary_account",
  get_all: "/get_all",
  add: "/add",
  delete: "/delete",
};

export interface IP2pAds {
  get_primary_account(
    params: IP2pAds_GetPrimaryAcctParams,
  ): Promise<IP2pAds_GetPrimaryAcctRs>;

  get_all(params: IP2pAds_GetAllParams): Promise<IP2pAds_GetAllRs>;

  add(body: IP2pAds_AddRq): Promise<IP2pAds_AddRs>;

  delete(body: IP2pAds_DeleteRq): Promise<IP2pAds_DeleteRs>;
}

export type IP2pAds_GetPrimaryAcctParams = { walletAddress: string };
export type IP2pAds_GetPrimaryAcctRs = {
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

export type IP2pAds_AddRq = {};
export type IP2pAds_AddRs = {};

export type IP2pAds_DeleteRq = {};
export type IP2pAds_DeleteRs = {};

import axios from "axios";
import {
  P2pAdsRoute,
  IP2pAds,
  IP2pAds_AddRq,
  IP2pAds_AddRs,
  IP2pAds_DeleteRq,
  IP2pAds_DeleteRs,
  IP2pAds_GetAllParams,
  IP2pAds_GetAllRs,
  IP2pAds_GetPrimaryAcctParams,
  IP2pAds_GetPrimaryAcctRs,
} from "./types";

export class P2pAdsRpc implements IP2pAds {
  url = "/bankAccount";

  async get_primary_account(
    params: IP2pAds_GetPrimaryAcctParams,
  ): Promise<IP2pAds_GetPrimaryAcctRs> {
    const res = await axios.get(this.url + P2pAdsRoute.get_primary_account, {
      params,
    });
    return res.data;
  }

  async get_all(params: IP2pAds_GetAllParams): Promise<IP2pAds_GetAllRs> {
    const res = await axios.get(this.url + P2pAdsRoute.get_all, {
      params,
    });
    return res.data;
  }

  async add(
    body: IP2pAds_AddRq, // }
  ): Promise<IP2pAds_AddRs> {
    const res = await axios.post(this.url + P2pAdsRoute.add, body);
    return res.data;
  }

  async delete(body: IP2pAds_DeleteRq): Promise<IP2pAds_DeleteRs> {
    const res = await axios.post(this.url + P2pAdsRoute.delete, body);
    return res.data;
  }
}

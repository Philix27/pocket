import axios from "axios";
import {
  P2pAdsRoute,
  IP2pAds,
  IP2pAds_CreateRq,
  IP2pAds_CreateRs,
  IP2pAds_DeleteRq,
  IP2pAds_DeleteRs,
  IP2pAds_GetAllParams,
  IP2pAds_GetAllRs,
  IP2pAds_GetOneRs,
  IP2pAds_UpdateRs,
  IP2pAds_GetOneParams,
  IP2pAds_UpdateRq,
} from "./types";

export class P2pAdsRpc implements IP2pAds {
  url = "/p2p-ads";

  async get_one(params: IP2pAds_GetOneParams): Promise<IP2pAds_GetOneRs> {
    const res = await axios.get(P2pAdsRoute.base + P2pAdsRoute.get_one, {
      params,
    });
    return res.data;
  }

  async get_all(params: IP2pAds_GetAllParams): Promise<IP2pAds_GetAllRs> {
    const res = await axios.get(P2pAdsRoute.base + P2pAdsRoute.get_all, {
      params,
    });
    return res.data;
  }

  async create(body: IP2pAds_CreateRq): Promise<IP2pAds_CreateRs> {
    const res = await axios.post(P2pAdsRoute.base + P2pAdsRoute.create, body);
    return res.data;
  }

  async update(body: IP2pAds_UpdateRq): Promise<IP2pAds_UpdateRs> {
    const res = await axios.post(P2pAdsRoute.base + P2pAdsRoute.update, body);
    return res.data;
  }

  async delete(body: IP2pAds_DeleteRq): Promise<IP2pAds_DeleteRs> {
    const res = await axios.post(P2pAdsRoute.base + P2pAdsRoute.delete, body);
    return res.data;
  }
}

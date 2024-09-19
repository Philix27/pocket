import { p2pAbi, p2pContractAddress } from './abi';
import * as fn from './fn';
import * as utils from './util';

export const App3Abi = { p2pAbi, p2pContractAddress };

export const FHE = {
  p2pAbi,
  p2pContractAddress,
  ...fn,
  ...utils,
};

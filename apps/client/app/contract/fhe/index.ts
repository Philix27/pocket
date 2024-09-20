<<<<<<< HEAD:apps/client/app/contract/fhe/index.ts
import { p2pAbi, p2pContractAddress } from "./abi";
import * as fn from "./fn";
import * as utils from "./util";


export const App3Abi = { p2pAbi, p2pContractAddress }
=======
import { p2pAbi, p2pContractAddress } from './abi';
import * as fn from './fn';
import * as utils from './util';

export const App3Abi = { p2pAbi, p2pContractAddress };
>>>>>>> main:client/app/contract/fhe/index.ts

export const FHE = {
  p2pAbi,
  p2pContractAddress,
  ...fn,
  ...utils,
<<<<<<< HEAD:apps/client/app/contract/fhe/index.ts
}
=======
};
>>>>>>> main:client/app/contract/fhe/index.ts

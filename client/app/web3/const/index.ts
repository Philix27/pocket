import { isTestnet } from './env';
import { AppContractAbi } from './abi';

export * from './abi';
export * from './cusdToken';
export * from './env';

const TESTNET_CONTRACT_ADDRESS = '0x47245FdA51fDFbaBbe807351eb6bBB3816567d77';
const MAINNET_CONTRACT_ADDRESS = '0x47245FdA51fDFbaBbe807351eb6bBB3816567d77';

export const AppContract = {
  address: isTestnet ? TESTNET_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS,
  abi: AppContractAbi,
};

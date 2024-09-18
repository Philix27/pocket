import {} from '@web3auth/base';
import {} from '@web3auth/base-provider';
import {} from '@web3auth/ethereum-mpc-provider';
import {} from '@web3auth/modal';
import {} from '@web3auth/mpc-core-kit';
import {} from '@web3auth/single-factor-auth';
import {} from '@web3auth/wallet-services-plugin';
import {} from '@web3auth/web3auth-wagmi-connector';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { web3AuthInstance } from './web3Instance';

function Trial() {
  web3AuthInstance.getUserInfo();
}

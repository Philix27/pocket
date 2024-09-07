'use client';
import { Web3Auth } from '@web3auth/modal';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from '@web3auth/base';

const name = 'Pocket Ramp';
const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: '44787', // hex of 44787, celo testnet
  rpcTarget: 'https://alfajores-forno.celo-testnet.org',
  displayName: 'Celo Testnet',
  blockExplorerUrl: 'https://explorer.celo.org/alfajores',
  ticker: 'CELO',
  tickerName: 'CELO',
  logo: 'https://cryptologos.cc/logos/celo-celo-logo.png',
};

const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });

export const web3AuthInstance = new Web3Auth({
  clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!,
  chainConfig,
  privateKeyProvider,
  uiConfig: {
    appName: name,
    loginMethodsOrder: ['google'],
    defaultLanguage: 'en',
    modalZIndex: '2147483647',
    logoLight: 'https://web3auth.io/images/web3authlog.png',
    logoDark: 'https://web3auth.io/images/web3authlogodark.png',
    uxMode: 'redirect',
    mode: 'auto',
  },
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  enableLogging: true,
});

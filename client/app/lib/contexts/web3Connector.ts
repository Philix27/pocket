// Web3Auth Libraries
'use client';
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector';
import { Web3Auth } from '@web3auth/modal';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK, WALLET_ADAPTERS } from '@web3auth/base';
import { Chain } from 'wagmi/chains';
import { WalletServicesPlugin } from '@web3auth/wallet-services-plugin';
import { AppStores } from '../zustand';
// import { web3AuthInstance } from './web3Instance';

export function Web3AuthConnectorInstance(chains: Chain[]) {
  // Create Web3Auth Instance
  const name = 'Pocket Ramp';
  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x' + chains[0].id.toString(16),
    rpcTarget: chains[0].rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
    displayName: chains[0].name,
    tickerName: chains[0].nativeCurrency?.name,
    ticker: chains[0].nativeCurrency?.symbol,
    blockExplorerUrl: chains[0].blockExplorers?.default.url[0] as string,
  };

  const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });
  const web3AuthInstance = new Web3Auth({
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

  const walletServicesPlugin = new WalletServicesPlugin({
    walletInitOptions: {
      whiteLabel: {
        showWidgetButton: true,
      },
    },
  });

  web3AuthInstance.addPlugin(walletServicesPlugin);

  // updateInfp(web3AuthInstance);

  const modalConfig = {
    [WALLET_ADAPTERS.OPENLOGIN]: {
      label: 'openlogin',
      loginMethods: {
        facebook: {
          // it will hide the facebook option from the Web3Auth modal.
          name: 'facebook login',
          showOnModal: false,
        },
      },
      // setting it to false will hide all social login methods from modal.
      showOnModal: true,
    },
  };

  return Web3AuthConnector({
    web3AuthInstance,
    modalConfig,
  });
}

const updateInfp = async (web3AuthInstance: Web3Auth) => {
  const store = AppStores.useChat;
  if (web3AuthInstance.connected) {
    const user = await web3AuthInstance.getUserInfo();
    store.setState({ isLoggedIn: true, userInfo: user });
  }
};

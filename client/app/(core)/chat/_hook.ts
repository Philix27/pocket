import { IProvider, WALLET_ADAPTERS } from '@web3auth/base';
import { useEffect, useState } from 'react';
import { web3auth } from './config';
import { ethers, JsonRpcSigner } from 'ethers';
import { useAccount } from 'wagmi';
import { AppStores } from '@/lib';

export const useWeb3Auth = () => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const { address: wagAddress } = useAccount();
  const store = AppStores.useChat();

  const init = async () => {
    try {
      await web3auth.init();
      setProvider(web3auth.provider);

      if (web3auth.connected) {
        // setLoggedIn(true);
        store.update({ isLoggedIn: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider: 'google',
    });
    setProvider(web3authProvider);
    if (web3auth.connected) {
      // setLoggedIn(true);
      store.update({ isLoggedIn: true });
    }
  };

  const logout = async () => {
    await web3auth.logout();
    setProvider(null);
    store.update({ isLoggedIn: false, signer: null });
  };

  const getWallet = async (): Promise<JsonRpcSigner | null> => {
    if (!provider) {
      //   uiConsole('provider not initialized yet');
      return null;
    }
    const ethersProvider = new ethers.BrowserProvider(provider);

    return ethersProvider.getSigner();
  };

  const getAccounts = async (): Promise<any> => {
    if (!provider) {
      //   uiConsole('provider not initialized yet');
      return;
    }
    try {
      const ethersProvider = new ethers.BrowserProvider(provider);
      const signer = await ethersProvider.getSigner();

      // Get user's Ethereum public address
      const address = await signer.getAddress();

      return address;
    } catch (error) {
      return error;
    }
  };

  const getDetails = async () => {
    if (web3auth.connected) {
      const address = await getAccounts();
      const wallet = await getWallet();
      store.update({ signer: wallet, web3Wallet: address });
    }
  };

  useEffect(() => {
    init();
    getAccounts();
  }, []);

  useEffect(() => {
    getDetails();
  }, [provider, store.isLoggedIn]);

  return {
    isLoggedIn: store.isLoggedIn,
    address: store.web3Wallet,
    wagAddress,
    login,
    wallet: store.signer,
    logout,
    provider,
  };
};

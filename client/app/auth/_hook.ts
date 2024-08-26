import { IProvider, WALLET_ADAPTERS } from '@web3auth/base';
import { useEffect, useState } from 'react';
import { web3auth } from './config';
import { ethers, JsonRpcSigner } from 'ethers';

export const useWeb3Auth = () => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [wallet, setWallet] = useState<any | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const init = async () => {
    try {
      await web3auth.init();
      setProvider(web3auth.provider);

      if (web3auth.connected) {
        setLoggedIn(true);
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
      setLoggedIn(true);
    }
  };

  const logout = async () => {
    await web3auth.logout();
    setProvider(null);
    setWallet(null);
    setLoggedIn(false);
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
      const address = signer.getAddress();

      return await address;
    } catch (error) {
      return error;
    }
  };

  const getDetails = async () => {
    if (web3auth.connected) {
      const address = await getAccounts();
      setAddress(address);
      const wallet = await getWallet();
      setWallet(wallet);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    getDetails();
  }, [provider, isLoggedIn]);

  return { login, isLoggedIn, wallet, logout, provider, address };
};

'use client';

import { IProvider, UserInfo } from '@web3auth/base';
import { useEffect, useState } from 'react';
// import RPC from '../auth/ethersRPC';
import { AppStores } from '../zustand';
import { ethers } from 'ethers';
import { useAppRouter } from './useRouter';
import { web3AuthInstance } from '../contexts';
// import { ethers } from 'ethers';
// import RPC from "./viemRPC";
// import RPC from "./web3RPC";

export const useWeb3Modal = () => {
  const web3auth = web3AuthInstance;
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [balance, setBalance] = useState('');
  const [address, setAddress] = useState('');
  const [signer, setSigner] = useState<ethers.JsonRpcSigner>();
  const [userInfo, setUserInfo] = useState<Partial<UserInfo>>();
  const store = AppStores.useChat();
  const router = useAppRouter();

  useEffect(() => {
    const init = async () => {
      if (web3auth.connected) {
        return;
      }
      try {
        // IMP START - SDK Initialization
        await web3auth.initModal();
        // IMP END - SDK Initialization
        setProvider(web3auth.provider);
        setDetails();
      } catch (error) {
        console.error(error);
      }
      // }
    };

    init();
  }, []);

  const login = async () => {
    try {
      // IMP START - Login
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      setDetails();

      const user = await web3auth.getUserInfo();
      store.update({
        isLoggedIn: true,
        userInfo: user,
      });
    } catch (error) {}
  };

  const logout = async () => {
    await web3auth.logout();
    setProvider(null);
    store.clear();
    router.push('/');
  };

  const manageSigner = async () => {
    if (!provider) {
      return;
    }
    // await window.ethereum.request({ method: 'eth_requestAccounts' });
    const ethersProvider = new ethers.BrowserProvider(provider);
    const signer = await ethersProvider.getSigner();
    console.log('manageSigner:', signer);
    setSigner(signer);

    if (!store.signer) {
      // const smartAccountSigner = await providerToSmartAccountSigner(provider as EIP1193Provider<''>);
      // store.update({ signer: signer });
    }
    return signer;
  };

  const setDetails = async () => {
    if (!provider) {
      console.log('Provider not initialized');
      return;
    }

    // IMP START - Get User Information
    await manageSigner();
    try {
      const user = await web3auth.getUserInfo();
      // const address = await RPC.getAccounts(provider);
      // const balance = await RPC.getBalance(provider);

      setAddress(address);
      setUserInfo(user);
      setBalance(balance);
      store.update({ isLoggedIn: true, balance: balance, web3Wallet: address, userInfo: user });
    } catch (e) {
      console.log('user not logged in');
    }
  };

  return {
    address,
    userInfo,
    logout,
    login,
    balance,
    signer,
    isLoggedIn: web3auth.connected,
    status: web3auth.status,
    manageSigner,
  };
};

'use client';

import { AppButton } from '@/comps';
import { XMTPProvider } from '@xmtp/react-sdk';
import Home from './Home';
import { useWeb3Modal, AppStores } from '@/lib';

export default function AppX() {
  const { logout, address, isLoggedIn } = useWeb3Modal();
  const store = AppStores.useChat();

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="md:w-[50%] w-[90%]">
        <h1>Web3Auth XMTP Quickstart </h1>

        <h3>Web3Auth {store.web3Wallet}</h3>
        {/* <h3>WagAddress {wagAddress}</h3> */}

        {isLoggedIn && (
          <>
            Ontop
            <XMTPProvider>
              <Home
                env={process.env.REACT_APP_XMTP_ENV || 'dev'}
                wallet={address}
                onLogout={logout}
                isContained={false}
                isConsent={false}
              />
            </XMTPProvider>
          </>
        )}
      </div>
    </div>
  );
}

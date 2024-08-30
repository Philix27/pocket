'use client';

import { AppButton } from '@/comps';
import { XMTPProvider } from '@xmtp/react-sdk';
import Home from './Home';
import { useWeb3Modal, AppStores } from '@/lib';

export default function AppX() {
  const { login, logout, address, isLoggedIn } = useWeb3Modal();
  const store = AppStores.useChat();

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="w-[50%]">
        <h1>Web3Auth XMTP Quickstart </h1>
        

        {store.isLoggedIn && (
          <AppButton
            className="ml-3"
            onClick={() => {
              store.update({ showChat: !store.showChat });
            }}
          >
            Toggle
          </AppButton>
        )}
        <h3>Web3Auth {address}</h3>
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

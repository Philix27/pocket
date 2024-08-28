'use client';

import { AppButton } from '@/comps';
import { useWeb3Auth } from './_hook';
import { XMTPProvider } from '@xmtp/react-sdk';
import Home from './Home';
import { AppStores } from '@/lib';

export default function AppX() {
  const { wagAddress, wallet, isLoggedIn, login, logout, address } = useWeb3Auth();
  const store = AppStores.useSettingsStore();

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="w-[50%]">
        <h1>Web3Auth XMTP Quickstart </h1>
        <AppButton
          className="ml-3"
          onClick={() => {
            if (store.isLoggedIn) {
              logout();
            } else {
              login();
            }
          }}
        >
          {isLoggedIn ? 'Logout' : 'Login with Google'}
        </AppButton>

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
        <h3>WagAddress {wagAddress}</h3>

        {isLoggedIn && (
          <>
            Ontop
            <XMTPProvider>
              <Home
                env={process.env.REACT_APP_XMTP_ENV || 'dev'}
                wallet={wallet}
                isPWA={false}
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

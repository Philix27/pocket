'use client';

import { AppButton } from '@/comps';
import { useWeb3Auth } from './_hook';
import { XMTPProvider } from '@xmtp/react-sdk';
import Home from './Home';

export default function AppX() {
  const { wallet, isLoggedIn, login, logout, address } = useWeb3Auth();

  return (
    <div>
      <h1>Web3Auth XMTP Quickstart </h1>
      <AppButton className="ml-3" onClick={() => login()}>
        {isLoggedIn ? 'Connected' : 'Login with Google'}
      </AppButton>
      {isLoggedIn && (
        <AppButton className="ml-3" onClick={() => logout()}>
          Logout
        </AppButton>
      )}
      <h3>{address}</h3>

      {/* {isLoggedIn && (
        <section className="App-section">
          <AppButton onClick={() => window.FloatingInbox.open()}>Open</AppButton>
          <AppButton className="ml-3" onClick={() => window.FloatingInbox.close()}>
            Close
          </AppButton>
        </section>
      )} */}

      {isLoggedIn && (
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
      )}
    </div>
  );
}

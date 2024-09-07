'use client';

import { useWeb3Modal } from '@/lib';

export default function App() {
  const { balance, userInfo, address } = useWeb3Modal();

  return (
    <div className="w-full items-center justify-center">
      <h1 className="title">
        <a target="_blank" href="https://web3auth.io/docs/sdk/pnp/web/modal" rel="noreferrer">
          Web3Auth
        </a>
        & NextJS Quick Start
      </h1>

      <div id="console" style={{ whiteSpace: 'pre-line' }}>
        <p style={{ whiteSpace: 'pre-line' }}></p>
        {userInfo && <p>{userInfo.email}</p>}
        {address && <p>{address}</p>}
        {/* {balance && <p>{balance}</p>} */}
      </div>
    </div>
  );
}

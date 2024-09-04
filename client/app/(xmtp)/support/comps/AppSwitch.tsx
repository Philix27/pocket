'use client';
import { useClient } from '@xmtp/react-sdk';
import { useWallet } from '@/lib';
import { XMTPConnect } from './XMTPConnect';
import { Inbox } from './Inbox';
import { WalletConnect } from './WalletConnect';

export default function AppSwitch() {
  const { isConnected, address } = useWallet();
  const { client } = useClient();

  if (!isConnected) {
    return <WalletConnect />;
  }

  // if (!store.isLoggedIn) {
  //   return (
  //     <div className="flex w-full items-center justify-center">
  //       <AppButton className="w-fit" onClick={login}>
  //         Connect
  //       </AppButton>
  //     </div>
  //   );
  // }

  if (!client) {
    return <XMTPConnect />;
  }

  return <Inbox />;
}

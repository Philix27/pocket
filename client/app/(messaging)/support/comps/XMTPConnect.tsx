import { Signer, useClient } from '@xmtp/react-sdk';
import { useCallback } from 'react';
import { Notification } from './Notification';
import { AppButton, TextP } from '@/comps';
import { useWalletClient } from 'wagmi';
import { BiLink } from 'react-icons/bi';

export function XMTPConnect() {
  const { isLoading, error, initialize } = useClient();
  const { data: walletClient } = useWalletClient();

  const handleConnect = useCallback(() => {
    try {
      void initialize({
        signer: walletClient as unknown as Signer,
        options: {
          env: 'production',
        },
      });

      // props.getConversations();
    } catch (error) {
      console.log('initErr', error);
    }
  }, [initialize, walletClient]);

  if (error) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="w-[70%] flex flex-col items-center">
          <div className="w-full">
            <img src={'/support.png'} className="h-[300px] w-auto" />
          </div>
          <TextP className="my-5">Something went wrong.</TextP>
          <AppButton onClick={handleConnect}>{`Try again`}</AppButton>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Notification icon={<BiLink />} title="Connecting to XMTP">
        Awaiting signatures...
      </Notification>
    );
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[70%] flex flex-col items-center">
        <div className="w-full">
          <img src={'/support.png'} className="h-[300px] w-auto" />
        </div>
        <TextP className="my-5">Welcome...</TextP>
        <AppButton onClick={handleConnect}>{`Connect & Get started`}</AppButton>
      </div>
    </div>
  );
}

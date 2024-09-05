import { LinkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Signer, useClient } from '@xmtp/react-sdk';
import { useCallback } from 'react';
import { Notification } from './Notification';
import { BiChat } from 'react-icons/bi';
import { AppButton } from '@/comps';
import { useWalletClient } from 'wagmi';

type XMTPConnectButtonProps = {
  label: string;
};

const XMTPConnectButton: React.FC<XMTPConnectButtonProps> = ({ label }) => {
  const { initialize } = useClient();
  const { data: walletClient } = useWalletClient();

  const handleConnect = useCallback(() => {
    try {
      void initialize({
        signer: walletClient as unknown as Signer,
        options: {
          env: 'production',
        },
      });
    } catch (error) {
      console.log('initErr', error);
    }
  }, [initialize, walletClient]);

  return <AppButton onClick={handleConnect}>{label}</AppButton>;
};

export const XMTPConnect: React.FC = () => {
  const { isLoading, error } = useClient();

  if (error) {
    return (
      <Notification
        icon={<ExclamationTriangleIcon />}
        title="Could not connect to XMTP"
        cta={<XMTPConnectButton label="Try again" />}
      >
        Something went wrong
      </Notification>
    );
  }

  if (isLoading) {
    return (
      <Notification icon={<LinkIcon />} title="Connecting to XMTP">
        Awaiting signatures...
      </Notification>
    );
  }

  return (
    <Notification
      icon={<BiChat size={24} />}
      title="Not connected with an agent"
      cta={<XMTPConnectButton label="Connect & Get started" />}
    >
      Welcome
    </Notification>
  );
};

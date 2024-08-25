'use client';
import Home from './Home';
import { XMTPProvider } from '@xmtp/react-sdk';

type IProps = {
  isPWA: boolean;
  wallet: string;
  onLogout: VoidFunction;
  isContained: boolean;
  isConsent: boolean;
  env: string;
};

export function FloatingInbox(props: IProps) {
  return (
    <XMTPProvider>
      <Home
        isPWA={props.isPWA}
        wallet={props.wallet}
        onLogout={props.onLogout}
        isConsent={props.isConsent}
        isContained={props.isContained}
        env={props.env}
      />
    </XMTPProvider>
  );
}

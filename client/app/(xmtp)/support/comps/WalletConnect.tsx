import { use3Wagmi } from '@/lib';
import { AppButton } from '@/comps';

export const WalletConnect: React.FC = () => {
  const { connect, connectors, connectionErr } = use3Wagmi();

  return (
    <div className="main gap-x-2 gap-y-3">
      {connectors.map((connector) => {
        return (
          <AppButton key={connector.id} onClick={() => connect({ connector })}>
            {connector.name}
          </AppButton>
        );
      })}
      {connectionErr && <div>{connectionErr.message}</div>}
    </div>
  );
};

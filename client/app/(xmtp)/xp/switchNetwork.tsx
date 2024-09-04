import { AppButton } from '@/comps'
import { useChainId, useSwitchChain } from 'wagmi'

export function SwitchChain() {
  const chainId = useChainId()
  const { chains, switchChain, error } = useSwitchChain()

  return (
    <div>
      <h2>Switch Chain</h2>
      <h3>Connected to {chainId}</h3>
      {chains.map((chain) => (
        <AppButton
          disabled={chainId === chain.id}
          key={chain.id}
          onClick={() => switchChain({ chainId: chain.id })}
          type="button"
        >
          {chain.name}
        </AppButton>
      ))}

      {error?.message}
    </div>
  );
}
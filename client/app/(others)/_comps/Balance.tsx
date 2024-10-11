'use client';
import { use3Wagmi, AddressFn } from '@/lib';
import { useBalance } from 'wagmi';

export function Balance(props: { tokenAddress?: `0x${string}` }) {
  const { address } = use3Wagmi();

  const { isLoading, error, data } = useBalance({
    address: address as `0x${string}`,
    token: props.tokenAddress,
  });

  if (isLoading) return <p>...</p>;
  if (error) return <p>...</p>;

  return <>{AddressFn.shortValue(data.value!)}</>;
}

import { AppSelect, AppTextInput, AppButton } from '@/comps';
import React from 'react';
import { useAppSend } from './useSend';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { use3Wagmi } from '@/lib';
import { useBalance, useSendTransaction } from 'wagmi';
import { z } from 'zod';

const TokenAddress: Record<string, `0x${string}`> = {
  cUSD: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
  cEURO: '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F',
  cREAL: '0xE4D517785D091D3c54818832dB6094bcc2744545',
  USDC: '0x28C3d1cD466Ba22f6cae51b1a4692a831696391A',
};

const schema = z.object({
  currency: z.string().min(2),
  wallet: z.string().min(20),
  amount: z.number().gt(0, { message: 'must be greater zero' }),
});

type FormData = z.infer<typeof schema>;

export function WalletScreen() {
  const { address } = use3Wagmi();
  const store = useAppSend();
  const send = useSendTransaction();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    try {
      send.sendTransaction({
        to: data.wallet as `0x${string}`,
        value: BigInt(data.amount),
      });

      toast.success('Successful');
    } catch (e) {
      toast.error('Not successful');
    }
  };

  const balance = useBalance({
    token: TokenAddress.cUSD,
  });

  return (
    <form className="px-5 py-4 gap-y-2 w-full flex flex-col items-center space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <AppSelect
        label="Select currency"
        onChange={(e) => {
          setValue('currency', e);
        }}
        data={[
          {
            label: 'cUSD',
            value: 'cUSD',
          },
          {
            label: 'CELO',
            value: 'CELO',
          },
          {
            label: 'cEURO',
            value: 'cEURO',
          },
          {
            label: 'USDC',
            value: 'USDC',
          },
        ]}
        desc={balance.data?.value!.toString()}
        // desc={AddressFn.shortValue(balance.data?.value!)}
      />

      {store.screen === 'WALLET' && (
        <AppTextInput
          name="wallet"
          place={'Enter wallet address'}
          label="Wallet Address"
          control={register('wallet')}
          errorMessage={errors.wallet && errors.wallet.message}
        />
      )}

      {store.screen === 'PHONE' && (
        <AppTextInput control={undefined} type="number" name="phone" place={'2348012345678'} label="Phone number" />
      )}

      <AppTextInput
        name="amount"
        place={'100'}
        label="Amount"
        type="number"
        control={register('amount', { valueAsNumber: true })}
        errorMessage={errors.amount && errors.amount.message}
      />
      <AppButton className="w-[75%]">Send</AppButton>
    </form>
  );
}

import { FormEvent } from "react";
import { useWaitForTransactionReceipt, useSendTransaction, BaseError } from "wagmi";
import { Hex, parseEther } from "viem";
import { AppButton, AppTextInput } from "@/comps";

export function SendTransaction() {
  const { data: hash, error, isPending, sendTransaction } = useSendTransaction()

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const to = formData.get('address') as Hex
    const value = formData.get('value') as string
    sendTransaction({ to, value: parseEther(value) })
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  return (
    <div>
      <h2>Send Transaction</h2>
      <form onSubmit={submit}>
        <AppTextInput name="address" place="Address" control={undefined} />
        <AppTextInput name="value" place="Amount (ETH)" type="number" control={undefined} />
        {/* <AppTextInput name="value" place="Amount (ETH)" type="number" step="0.000000001"  /> */}
        <AppButton disabled={isPending} type="submit">
          {isPending ? 'Confirming...' : 'Send'}
        </AppButton>
      </form>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && 'Waiting for confirmation...'}
      {isConfirmed && 'Transaction confirmed.'}
      {error && <div>Error: {(error as BaseError).shortMessage || error.message}</div>}
    </div>
  );
}
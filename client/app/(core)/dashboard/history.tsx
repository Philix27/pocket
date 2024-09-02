"use client";
import { TextH, genDateTime, shortenAddress, Spinner } from '@/comps';
import { AppContract, useMinipay } from "@/contract";
import { useReadContract } from "wagmi";


interface ICard {
  amount: bigint;
  createdAt: number;
  from: string;
  id: number;
  isClaimed: boolean;
  to: string;
  updatedAt: number;
}
export function CardsCreationHistory() {
  const { walletAddress } = useMinipay();

  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: "getCardsCreatedBy",
    args: [walletAddress],
  });

  if (!walletAddress) {
    return <Spinner />;
  }
  if (result.isLoading) {
    return <Spinner />;
  }
  const data = result.data as ICard[];
  console.log("Data", data);

  return (
    <div className="w-full mt-10">
      <div className="border-b w-full pb-2">
        <TextH v="h5" className="text-card-foreground">
          History
        </TextH>
      </div>
      {/* {data.map((val, i) => {
        return (
          <GiftCard
            key={i}
            cardOwner={val.to}
            amount={val.amount.toString()}
            created={genDateTime(Number(val.createdAt))}
            from={shortenAddress(val.from)}
          />
        );
      })} */}
    </div>
  );
}

import { Injectable } from '@nestjs/common';
import { $Enums } from '@prisma/client';
import {
  IQuickSwap,
  IQuickSwap_BuyRq,
  IQuickSwap_BuyRs,
  IQuickSwap_GetRatesParams,
  IQuickSwap_GetRatesRs,
  IQuickSwap_GetTransactionsParams,
  IQuickSwap_GetTransactionsRs,
  IQuickSwap_SellRq,
  IQuickSwap_SellRs,
} from '@repo/rpc';
import { PrismaService } from 'mod/prisma';

@Injectable()
export class SwapService implements IQuickSwap {
  constructor(private readonly service: PrismaService) {}

  async get_rates(
    params: IQuickSwap_GetRatesParams,
  ): Promise<IQuickSwap_GetRatesRs> {
    const res = await this.service.rates.findMany();
    return { data: res };
  }

  async get_transactions(
    params: IQuickSwap_GetTransactionsParams,
  ): Promise<IQuickSwap_GetTransactionsRs> {
    const res = await this.service.transactions.findMany({
      where: {
        user_id: params.userId,
      },
      take: params.limit,
    });
    return {
      data: res.map((val, inx) => {
        return {
          transactionHash: val.transactionHash,
          description: val.description,
          category: val.category,
          status: val.status,
        };
      }),
    };
  }

  buy(body: IQuickSwap_BuyRq): Promise<IQuickSwap_BuyRs> {
    throw new Error('Method not implemented.');
  }

  sell(body: IQuickSwap_SellRq): Promise<IQuickSwap_SellRs> {
    throw new Error('Method not implemented.');
  }
}

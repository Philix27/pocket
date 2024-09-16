import { Injectable } from '@nestjs/common';
import {
  IDirectOrder,
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
export class SwapService implements IDirectOrder {
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

  async buy(body: IQuickSwap_BuyRq): Promise<IQuickSwap_BuyRs> {
    const res = await this.service.direct_order.create({
      data: {
        amount: body.amount,
        user_id: body.user_id,
        status: body.status, // user_id: params.userId,
      },
    });
    throw new Error('Method not implemented.');
  }

  sell(body: IQuickSwap_SellRq): Promise<IQuickSwap_SellRs> {
    throw new Error('Method not implemented.');
  }
}

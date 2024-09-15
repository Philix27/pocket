import { Injectable } from '@nestjs/common';
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

  get_rates(params: IQuickSwap_GetRatesParams): Promise<IQuickSwap_GetRatesRs> {
    const res = this.service;
    throw new Error('Method not implemented.');
  }
  get_transactions(
    params: IQuickSwap_GetTransactionsParams,
  ): Promise<IQuickSwap_GetTransactionsRs> {
    throw new Error('Method not implemented.');
  }
  buy(body: IQuickSwap_BuyRq): Promise<IQuickSwap_BuyRs> {
    throw new Error('Method not implemented.');
  }
  sell(body: IQuickSwap_SellRq): Promise<IQuickSwap_SellRs> {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}

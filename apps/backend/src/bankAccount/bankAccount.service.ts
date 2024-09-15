import { Injectable } from '@nestjs/common';
import {
  IBankAccount,
  IBankAccount_AddRq,
  IBankAccount_AddRs,
  IBankAccount_DeleteRq,
  IBankAccount_DeleteRs,
  IBankAccount_GetAllParams,
  IBankAccount_GetAllRs,
  IBankAccount_GetPrimaryAcctParams,
  IBankAccount_GetPrimaryAcctRs,
} from '@repo/rpc';
import { PrismaService } from 'mod/prisma';

@Injectable()
export class BankAccountService implements IBankAccount {
  constructor(private readonly service: PrismaService) {}

  async get_primary_account(
    params: IBankAccount_GetPrimaryAcctParams,
  ): Promise<IBankAccount_GetPrimaryAcctRs> {
    try {
      const res = await this.service.bank_account.findFirst({
        where: {
          user_id: params.userId,
        },
      });
      return { data: res };
    } catch (error) {}
  }

  async get_all(
    params: IBankAccount_GetAllParams,
  ): Promise<IBankAccount_GetAllRs> {
    try {
      const res = await this.service.bank_account.findMany({
        where: {
          user_id: params.userId,
        },
      });
      return { data: res };
    } catch (error) {}
  }

  async add(body: IBankAccount_AddRq): Promise<IBankAccount_AddRs> {
    try {
      await this.service.bank_account.create({
        data: body,
      });
      return {
        data: {
          msg: 'success',
        },
      };
    } catch (error) {}
  }

  async delete(body: IBankAccount_DeleteRq): Promise<IBankAccount_DeleteRs> {
    try {
      await this.service.bank_account.delete({
        where: { id: body.id },
      });
      return { data: { msg: 'sucess', id: body.id } };
    } catch (error) {}
  }
}

import { Controller, Delete, Get, Post } from '@nestjs/common';
import { BankAccountService } from './bankAccount.service';
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

@Controller('/bank_account')
export class BankAccountController implements IBankAccount {
  constructor(private readonly service: BankAccountService) {}

  @Get('/get_primary_account')
  async get_primary_account(
    params: IBankAccount_GetPrimaryAcctParams,
  ): Promise<IBankAccount_GetPrimaryAcctRs> {
    return await this.get_primary_account(params);
  }
  @Get()
  async get_all(
    params: IBankAccount_GetAllParams,
  ): Promise<IBankAccount_GetAllRs> {
    return await this.get_all(params);
  }

  @Post()
  async add(body: IBankAccount_AddRq): Promise<IBankAccount_AddRs> {
    return await this.add(body);
  }

  @Delete()
  async delete(body: IBankAccount_DeleteRq): Promise<IBankAccount_DeleteRs> {
    return await this.delete(body);
  }
}

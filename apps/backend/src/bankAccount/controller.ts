import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BankAccountService } from './service';
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

@Controller('bank_account')
export class BankAccountController implements IBankAccount {
  constructor(private readonly service: BankAccountService) {}

  @Get('/get_primary_account')
  async get_primary_account(
    params: IBankAccount_GetPrimaryAcctParams,
  ): Promise<IBankAccount_GetPrimaryAcctRs> {
    return await this.service.get_primary_account(params);
  }

  @Get()
  async get_all(
    @Param() params: IBankAccount_GetAllParams,
  ): Promise<IBankAccount_GetAllRs> {
    return await this.service.get_all(params);
  }

  @Post()
  async add(@Body() body: IBankAccount_AddRq): Promise<IBankAccount_AddRs> {
    return await this.service.add(body);
  }

  @Delete()
  async delete(body: IBankAccount_DeleteRq): Promise<IBankAccount_DeleteRs> {
    return await this.service.delete(body);
  }
}

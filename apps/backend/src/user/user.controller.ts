import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {
  IUser,
  IUser_SetTransactionPinRs,
  IUser_VerifyBvnRs,
  IUser_VerifyEmailRs,
  IUser_VerifyNinRs,
  IUser_VerifyPhoneRs,
  IUser_VerifyTransactionPinRs,
  IUserGetInfoRsBody,
  IUser_SetTransactionPinRq,
  IUser_VerifyBvnRq,
  IUser_VerifyEmailRq,
  IUser_VerifyNinRq,
  IUser_VerifyPhoneRq,
  IUser_VerifyTransactionPinRq,
  IUserGetInfoRqParam,
} from '@repo/rpc';

@Controller('/user')
export class UserController implements IUser {
  constructor(private readonly service: UserService) {}

  @Get('/get_info')
  async get_info(params: IUserGetInfoRqParam): Promise<IUserGetInfoRsBody> {
    return await this.service.get_info(params);
  }

  @Post('/verify_nin')
  async verify_nin(
    @Body() body: IUser_VerifyNinRq,
  ): Promise<IUser_VerifyNinRs> {
    return await this.service.verify_nin(body);
  }

  @Post('/verify_bvn')
  async verify_bvn(
    @Body() body: IUser_VerifyBvnRq,
  ): Promise<IUser_VerifyBvnRs> {
    const res = await this.service.verify_bvn(body);
    return res;
  }
  @Post('/verify_phone')
  async verify_phone(
    @Body() body: IUser_VerifyPhoneRq,
  ): Promise<IUser_VerifyPhoneRs> {
    return await this.service.verify_phone(body);
  }
  @Post('/verify_email')
  async verify_email(
    @Body() body: IUser_VerifyEmailRq,
  ): Promise<IUser_VerifyEmailRs> {
    return await this.service.verify_email(body);
  }

  @Post('/set_transaction_pin')
  async set_transaction_pin(
    @Body() body: IUser_SetTransactionPinRq,
  ): Promise<IUser_SetTransactionPinRs> {
    return await this.service.set_transaction_pin(body);
  }

  @Post('/verify_transaction_pin')
  async verify_transaction_pin(
    @Body() body: IUser_VerifyTransactionPinRq,
  ): Promise<IUser_VerifyTransactionPinRs> {
    return await this.service.verify_transaction_pin(body);
  }
}

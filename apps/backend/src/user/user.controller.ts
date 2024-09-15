import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {
  UserRoute,
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
// export class UserController {
export class UserController implements IUser {
  constructor(private readonly service: UserService) { }
  // @Get(UserRoute.get_info)
  get_info(params: IUserGetInfoRqParam): Promise<IUserGetInfoRsBody> {
    throw new Error('Method not implemented.');
  }
  verify_nin(body: IUser_VerifyNinRq): Promise<IUser_VerifyNinRs> {
    throw new Error('Method not implemented.');
  }
  verify_bvn(body: IUser_VerifyBvnRq): Promise<IUser_VerifyBvnRs> {
    throw new Error('Method not implemented.');
  }
  verify_phone(body: IUser_VerifyPhoneRq): Promise<IUser_VerifyPhoneRs> {
    throw new Error('Method not implemented.');
  }
  verify_email(body: IUser_VerifyEmailRq): Promise<IUser_VerifyEmailRs> {
    throw new Error('Method not implemented.');
  }
  set_transaction_pin(
    body: IUser_SetTransactionPinRq,
  ): Promise<IUser_SetTransactionPinRs> {
    throw new Error('Method not implemented.');
  }
  verify_transaction_pin(
    body: IUser_VerifyTransactionPinRq,
  ): Promise<IUser_VerifyTransactionPinRs> {
    throw new Error('Method not implemented.');
  }
}

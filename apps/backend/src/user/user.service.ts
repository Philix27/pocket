import { Injectable } from '@nestjs/common';
import {
  IUser,
  IUser_SetTransactionPinRq,
  IUser_SetTransactionPinRs,
  IUser_VerifyBvnRq,
  IUser_VerifyBvnRs,
  IUser_VerifyEmailRq,
  IUser_VerifyEmailRs,
  IUser_VerifyNinRq,
  IUser_VerifyNinRs,
  IUser_VerifyPhoneRq,
  IUser_VerifyPhoneRs,
  IUser_VerifyTransactionPinRq,
  IUser_VerifyTransactionPinRs,
  IUserGetInfoRqParam,
  IUserGetInfoRsBody,
} from '@repo/rpc';
import { PrismaService } from 'mod/prisma';

@Injectable()
export class UserService implements IUser {
  constructor(readonly prisma: PrismaService) {}

  async get_info(params: IUserGetInfoRqParam): Promise<IUserGetInfoRsBody> {
    const res = await this.prisma.user.findFirst({
      where: {},
    });
    return res;
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

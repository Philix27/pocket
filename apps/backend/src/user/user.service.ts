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
      where: {
        walletAddress: params.walletAddress,
      },
    });
    return res;
  }

  async verify_nin(body: IUser_VerifyNinRq): Promise<IUser_VerifyNinRs> {
    const res = await this.prisma.user.update({
      where: {
        walletAddress: body.walletAddress,
      },
      data: {
        nin: body.nin,
      },
    });
    return res;
  }

  async verify_bvn(body: IUser_VerifyBvnRq): Promise<IUser_VerifyBvnRs> {
    const res = await this.prisma.user.update({
      where: {
        walletAddress: body.walletAddress,
      },
      data: {
        nin: body.bvn,
      },
    });
    return res;
  }

  async verify_phone(body: IUser_VerifyPhoneRq): Promise<IUser_VerifyPhoneRs> {
    const res = await this.prisma.user.update({
      where: {
        walletAddress: body.walletAddress,
      },
      data: {
        nin: body.phone,
      },
    });
    return res;
  }

  async verify_email(body: IUser_VerifyEmailRq): Promise<IUser_VerifyEmailRs> {
    const res = await this.prisma.user.update({
      where: {
        walletAddress: body.walletAddress,
      },
      data: {
        nin: body.email,
      },
    });
    return res;
  }

  async set_transaction_pin(
    body: IUser_SetTransactionPinRq,
  ): Promise<IUser_SetTransactionPinRs> {
    const res = await this.prisma.user.update({
      where: {
        walletAddress: body.walletAddress,
      },
      data: {
        pin: body.pin,
      },
    });
    return res;
  }

  async verify_transaction_pin(
    body: IUser_VerifyTransactionPinRq,
  ): Promise<IUser_VerifyTransactionPinRs> {
    const res = await this.prisma.user.update({
      where: {
        walletAddress: body.walletAddress,
      },
      data: {
        pin: body.pin,
      },
    });
    return res;
  }
}

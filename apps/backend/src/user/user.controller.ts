import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

type IGetUserInfoResponse = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  bvn?: string;
  nin?: string;
  dob?: string;
  address1?: string;
  address2?: string;
};
type IVerifyPhoneDto = {
  phone: string;
  sessionId?: string;
};

@Controller('/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/info')
  getInfo(@Param('address') address: string): IGetUserInfoResponse {
    // return this.service.getHello();

    return {};
  }

  @Post('/verify_phone')
  verifyPhone(@Body() body: IVerifyPhoneDto): boolean {
    // return this.service.getHello();

    return;
  }

  @Post('/verify_bvn')
  verifyBvn(@Body() body: IVerifyPhoneDto): boolean {
    // return this.service.getHello();

    return;
  }

  @Post('/verify_nin')
  verifyNin(@Body() body: IVerifyPhoneDto): boolean {
    // return this.service.getHello();

    return;
  }

  @Post('/verify_email')
  verifyEmail(@Body() body: IVerifyPhoneDto): boolean {
    // return this.service.getHello();

    return;
  }
  @Get('/get_bank_accounts')
  verifyBankAccounts(): boolean {
    // return this.service.getHello();

    return;
  }
}

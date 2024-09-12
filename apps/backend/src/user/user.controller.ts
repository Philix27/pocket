import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@repo/rpc';

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

const UserRoute = {
  get_info: '/get_info',
  verify_nin: '/verify_nin',
  verify_bvn: '/verify_bvn',
  verify_phone: '/verify_phone',
  verify_email: '/verify_email',
  get_bank_accounts: '/get_bank_accounts',
  set_transaction_pin: '/set_transaction_pin',
  verify_transaction_pin: '/verify_transaction_pin',
};

@Controller('/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(UserRoute.get_info)
  getInfo(@Param('address') address: string): IGetUserInfoResponse {
    // return this.service.getHello();

    return {};
  }

  @Post(UserRoute.verify_phone)
  verifyPhone(@Body() body: IVerifyPhoneDto) {
    // return this.service.getHello();

    return;
  }

  @Post(UserRoute.verify_bvn)
  verifyBvn(@Body() body: IVerifyPhoneDto): boolean {
    // return this.service.getHello();

    return;
  }

  @Post(UserRoute.verify_nin)
  verifyNin(@Body() body: IVerifyPhoneDto): boolean {
    // return this.service.getHello();

    return;
  }

  @Post(UserRoute.verify_email)
  verifyEmail(@Body() body: IVerifyPhoneDto): boolean {
    // return this.service.getHello();

    return;
  }

  @Get(UserRoute.get_bank_accounts)
  get_bank_accounts(): boolean {
    return;
  }

  @Patch(UserRoute.set_transaction_pin)
  set_transaction_pin() {
    return;
  }

  @Post(UserRoute.verify_transaction_pin)
  verify_transaction_pin() {
    return;
  }
}

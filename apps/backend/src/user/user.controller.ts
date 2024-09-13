import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRoute, IUser } from '@repo/rpc';

@Controller('/user')
export class UserController {
  // export class UserController implements IUser {
  constructor(private readonly service: UserService) {}

  // get_info(): IGetUserInfoResponse {
  //   throw new Error('Method not implemented.');
  // }
  // verify_nin(): Promise<IGetUserInfoResponse> {
  //   throw new Error('Method not implemented.');
  // }
  // verify_bvn(): Promise<IGetUserInfoResponse> {
  //   throw new Error('Method not implemented.');
  // }
  // verify_phone(): Promise<IGetUserInfoResponse> {
  //   throw new Error('Method not implemented.');
  // }
  // verify_email(): Promise<IGetUserInfoResponse> {
  //   throw new Error('Method not implemented.');
  // }
  // get_bank_accounts(): Promise<IGetUserInfoResponse> {
  //   throw new Error('Method not implemented.');
  // }
  // set_transaction_pin(): Promise<IGetUserInfoResponse> {
  //   throw new Error('Method not implemented.');
  // }
  // verify_transaction_pin(): Promise<IGetUserInfoResponse> {
  //   throw new Error('Method not implemented.');
  // }

  // @Get(UserRoute.get_info)
  // get_info(@Param('address') address: string): Promise<IGetUserInfoResponse> {
  //   // return this.service.getHello();

  //   return;
  // }

  // @Post(UserRoute.verify_phone)
  // verifyPhone(@Body() body: IVerifyPhoneDto) {
  //   // return this.service.getHello();

  //   return;
  // }

  // @Post(UserRoute.verify_bvn)
  // verifyBvn(@Body() body: IVerifyPhoneDto): boolean {
  //   // return this.service.getHello();

  //   return;
  // }

  // @Post(UserRoute.verify_nin)
  // verifyNin(@Body() body: IVerifyPhoneDto): boolean {
  //   // return this.service.getHello();

  //   return;
  // }

  // @Post(UserRoute.verify_email)
  // verifyEmail(@Body() body: IVerifyPhoneDto): boolean {
  //   // return this.service.getHello();

  //   return;
  // }

  // @Get(UserRoute.get_bank_accounts)
  // get_bank_accounts(): boolean {
  //   return;
  // }

  // @Patch(UserRoute.set_transaction_pin)
  // set_transaction_pin() {
  //   return;
  // }

  // @Post(UserRoute.verify_transaction_pin)
  // verify_transaction_pin() {
  //   return;
  // }
}

import { Controller, Get } from '@nestjs/common';
import { KycService } from './kyc.service';

@Controller('/kyc')
export class KycController {
  constructor(private readonly appService: KycService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

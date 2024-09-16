import { Controller, Get } from '@nestjs/common';
import { P2pAdsService } from './ads.service';

@Controller('/p2p_ads')
export class P2pAdsController {
  constructor(private readonly service: P2pAdsService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}

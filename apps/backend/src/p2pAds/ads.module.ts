import { Module } from '@nestjs/common';
import { P2pAdsController } from './ads.controller';
import { P2pAdsService } from './ads.service';

@Module({
  imports: [],
  controllers: [P2pAdsController],
  providers: [P2pAdsService],
})
export class P2pAdsModule {}

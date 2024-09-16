import { Module } from '@nestjs/common';
import { P2pVendorController } from './vendor.controller';
import { P2pVendorService } from './vendor.service';

@Module({
  imports: [],
  controllers: [P2pVendorController],
  providers: [P2pVendorService],
})
export class P2pVendorModule {}

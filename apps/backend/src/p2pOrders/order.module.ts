import { Module } from '@nestjs/common';
import { P2pOrderController } from './order.controller';
import { P2pOrderService } from './order.service';

@Module({
  imports: [],
  controllers: [P2pOrderController],
  providers: [P2pOrderService],
})
export class P2pOrderModule {}

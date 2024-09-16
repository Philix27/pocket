import { Controller, Get } from '@nestjs/common';
import { P2pOrderService } from './order.service';

@Controller('/p2p_orders')
export class P2pOrderController {
  constructor(private readonly service: P2pOrderService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}

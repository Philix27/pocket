import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('/orders')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}

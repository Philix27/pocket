import { Controller, Get } from '@nestjs/common';
import { P2pVendorService } from './vendor.service';

@Controller('/p2p_vendors')
export class P2pVendorController {
  constructor(private readonly service: P2pVendorService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}

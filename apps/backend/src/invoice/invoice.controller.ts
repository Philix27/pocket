import { Controller, Get } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller()
export class InvoiceController {
  constructor(private readonly InvoiceService: InvoiceService) {}

  @Get()
  getHello(): string {
    return this.InvoiceService.getHello();
  }
}

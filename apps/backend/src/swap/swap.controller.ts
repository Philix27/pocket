import { Controller, Get } from '@nestjs/common';
import { SwapService } from './swap.service';

@Controller('/swap')
export class SwapController {
  constructor(private readonly appService: SwapService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

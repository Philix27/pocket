import { Injectable } from '@nestjs/common';

@Injectable()
export class P2pOrderService {
  getHello(): string {
    return 'Hello World!';
  }
}

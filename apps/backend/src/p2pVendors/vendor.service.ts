import { Injectable } from '@nestjs/common';

@Injectable()
export class P2pVendorService {
  getHello(): string {
    return 'Hello World!';
  }
}

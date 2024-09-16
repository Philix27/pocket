import { Injectable } from '@nestjs/common';

@Injectable()
export class P2pAdsService {
  getHello(): string {
    return 'Hello World!';
  }
}

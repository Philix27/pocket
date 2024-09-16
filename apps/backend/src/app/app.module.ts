import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'mod/prisma';
import { AuthModule } from 'mod/auth';
import { InvoiceModule } from 'mod/invoice';
import { UserModule } from 'mod/user';
import { OrderModule } from 'mod/orders';
import { SwapModule } from 'mod/swap';
import { BankAccountModule } from 'mod/bankAccount';
import { P2pAdsModule } from 'mod/p2pAds';
import { P2pOrderModule } from 'mod/p2pOrders';
import { P2pVendorModule } from 'mod/p2pVendors';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    InvoiceModule,
    UserModule,
    OrderModule,
    SwapModule,
    BankAccountModule,
    P2pAdsModule,
    P2pOrderModule,
    P2pVendorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

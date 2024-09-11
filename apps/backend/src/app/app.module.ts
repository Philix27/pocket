import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'mod/prisma';
import { AuthModule } from 'mod/auth';
import { InvoiceModule } from 'mod/invoice';
import { KycModule } from 'mod/kyc';
import { OrderModule } from 'mod/p2p_ads';
import { SwapService } from 'mod/swap';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    InvoiceModule,
    KycModule,
    OrderModule,
    SwapService,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

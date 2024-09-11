import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'mod/prisma';
import { AuthModule } from 'mod/auth';
import { InvoiceModule } from 'mod/invoice';
import { UserModule } from 'mod/user';
import { OrderModule } from 'mod/p2p_ads';
import { SwapModule } from 'mod/swap';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    InvoiceModule,
    UserModule,
    OrderModule,
    SwapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
